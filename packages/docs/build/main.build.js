const htmlParser = require('node-html-parser')
const { findComponents, readFile, writeFile } = require("./file.util")
const { printSuccess } = require('./log.util')
const {
    NEWLINE,
    DOCS_CHILD_REGEX,
    EXAMPLES_SEPERATOR,
    API_SEPERATOR,
    LEFT_WHITESPACE,
    SIDEBAR_SEPERATOR_START,
    SIDEBAR_SEPERATOR_END,
    SIDEBAR_TEMPLATE_FILEPATH,
    SIDEBAR_FILEPATH
} = require("./constants")

const components = new Map()

const newComponent = (tag, path) => ({
    tag,
    parent: null,
    path: {
        readme: path,
        examples: path.replace('readme.md', 'index.html')
    },
    content: {
        readme: null,
        examples: null,
    },
    subComponents: [],
})

const parseComponentNameFromPath = (componentPath) => componentPath
    .replace('lib/components/', '')
    .replace('/readme.md', '')
    .trim()

const initComponent = (componentPath) => {
    const tag = parseComponentNameFromPath(componentPath)
    const component = newComponent(tag, componentPath)
    const readmeContent = readFile(component.path.readme)
    if (readmeContent) {
        component.content.readme = readmeContent.split(NEWLINE)
    }
    component.content.examples = readFile(component.path.examples)
    components.set(tag, component)
}

const prepareReadmeContent = (component) => {
    let lines = [...component.content.readme]
    let stencilFooter = false
    let apiPart = false

    for (let index = 0; index < lines.length; index++) {
        const line = lines[index]
        if (line.startsWith(API_SEPERATOR)) {
            apiPart = true
        }
        if (line.startsWith('## Dependencies')
            || line.startsWith('### Graph')
            || line.startsWith('----------------------------------------------')) {
            stencilFooter = true
        }
        if (stencilFooter) {
            lines[index] = null
        } else {
            if (apiPart && line.startsWith('##')) {
                lines[index] = `##${line}`
            }
        }
    }

    component.content.readme = [...lines.filter(line => line !== null)]
}

const prepareSubComponentReadmeContent = (component) => {
    if (component.parent !== null) {
        let lines = [...component.content.readme]
        for (let index = 0; index < lines.length; index++) {
            const line = lines[index]
            if (line.startsWith(`# ${component.tag}`)) {
                lines[index] = `### \`${component.tag}\``
            }
        }
        component.content.readme = [...lines.filter(line => line !== null)]
    }
}

const findSubComponents = (component) => {
    let lines = [...component.content.readme]
    const childInformationTag = lines[0].match(DOCS_CHILD_REGEX)
    if (childInformationTag !== null && childInformationTag.length > 0) {
        const parent = childInformationTag[0]
            .replace('<!-- docs:child of', '')
            .replace('-->', '')
            .trim()
        component.parent = parent
        parentComponent = components.get(parent)
        parentComponent.subComponents.push(component.tag)
    }
}

const getCodeExample = (node) => node.innerHTML.toString()
    .split(NEWLINE)
    .map(line => line.substring(LEFT_WHITESPACE))
    .join(NEWLINE)

const buildExamplesContent = (component) => {
    const root = htmlParser.parse(component.content.examples)
    const container = htmlParser.parse(root.querySelector('.container').innerHTML)
    let scriptContent = []
    const content = container.childNodes.map(node => {
        if (node.nodeType === 3) {
            return node.rawText
        }
        if (node.nodeType === 1) {
            if (node.rawTagName === 'h2') {
                return `### ${node.childNodes.map(n => n.rawText).join(' ')}`
            }
            if (node.rawTagName === 'h3') {
                return `#### ${node.childNodes.map(n => n.rawText).join(' ')}`
            }
            if (node.rawTagName === 'h4') {
                return `##### ${node.childNodes.map(n => n.rawText).join(' ')}`
            }
            if (node.rawTagName === 'p') {
                return `${node.childNodes.map(n => n.rawText).join(' ')}`
            }
            if (node.rawTagName === 'section') {
                return '<div class="bal-app">'
                    + getCodeExample(node)
                    + '</div>' + NEWLINE + NEWLINE
                    + '```html'
                    + getCodeExample(node)
                    + '```'
            }
            if (node.rawTagName === 'script') {
                scriptContent.push(getCodeExample(node))
                return '```javascript'
                    + getCodeExample(node)
                    + '```'
            }
        }
        return null
    })

    if (content) {
        content.push('<script type="text/javascript">' + scriptContent.join(NEWLINE + NEWLINE) + '</script>')
        return content.filter(c => c !== null).filter(c => !c.startsWith(NEWLINE))
    }

    return []
}

const addExamples = (component) => {
    if (component.content.examples !== null) {
        const accumulator = []
        let isInExamples = false

        component.content.readme.forEach(line => {
            if (line.startsWith(EXAMPLES_SEPERATOR)) {
                isInExamples = true
            }
            if (line.startsWith(API_SEPERATOR)) {
                isInExamples = false
                accumulator.push(EXAMPLES_SEPERATOR)
                accumulator.push('')
                accumulator.push('## Examples')
                accumulator.push('')
                buildExamplesContent(component).forEach(l => accumulator.push(l))
                accumulator.push('')
                accumulator.push('## API')
                accumulator.push('')
                accumulator.push(`### \`${component.tag}\``)
                accumulator.push('')
            }
            if (!isInExamples) {
                accumulator.push(line)
            }
        })

        component.content.readme = accumulator
    }
}

const addSubComponentToParent = (component) => {
    if (component.subComponents.length > 0) {
        let lines = []
        component.subComponents.forEach(tag => {
            const subComponent = components.get(tag)
            lines = [...lines, ...subComponent.content.readme]
        })
        component.content.readme = [
            ...component.content.readme,
            ...lines,
        ]
    }
}

const addGithubLinks = (component) => {
    if (component.content.readme !== null) {
        const githubBaseUrl = 'https://github.com/baloise/ui-library/blob/master/packages/library/src/'
        const editHtml = '[:memo: Edit this page on Github](' + githubBaseUrl + component.path.readme + ')'
        const editExamples = '[:notebook: Improve or fix the examples on Github](' + githubBaseUrl + component.path.examples + ')'
        component.content.readme.push('')
        component.content.readme.push('<div class="bal-app" style="margin-top: 5em;">')
        component.content.readme.push('<div class="notification">')
        component.content.readme.push('<h4 class="title" style="margin-top: 0;">Help us to improve the documentation</h4>')
        component.content.readme.push('')
        component.content.readme.push(editHtml)
        component.content.readme.push('')
        component.content.readme.push(editExamples)
        component.content.readme.push('')
        component.content.readme.push('</div>')
        component.content.readme.push('</div>')
    }
}

const writeComponents = (component) => {
    if (component.content.readme !== null) {
        const err = writeFile(component.path.readme, component.content.readme.join(NEWLINE))
        if (err === null) {
            printSuccess(component.path.readme)
        }
    }
}

const getSidebarStart = (content) => content.split(SIDEBAR_SEPERATOR_START)[0] + SIDEBAR_SEPERATOR_START

const getSidebarEnd = (content) => NEWLINE + SIDEBAR_SEPERATOR_END + content.split(SIDEBAR_SEPERATOR_END)[1]

const generateSidebar = () => {
    const sidebarContent = readFile(SIDEBAR_TEMPLATE_FILEPATH)
    const newContent = [getSidebarStart(sidebarContent)]
    newContent.push(NEWLINE + '- **Components**' + NEWLINE)
    components.forEach(c => newContent.push(`  - [${c.tag}](${c.path.readme})`))
    newContent.push(getSidebarEnd(sidebarContent))
    const err = writeFile(SIDEBAR_FILEPATH, newContent.join(NEWLINE))
    if (err === null) {
        printSuccess(SIDEBAR_FILEPATH)
    }
}

findComponents((componentPaths) => {
    componentPaths.forEach(initComponent)
    components.forEach(prepareReadmeContent)
    components.forEach(findSubComponents)
    components.forEach(addExamples)
    components.forEach(prepareSubComponentReadmeContent)
    components.forEach(addSubComponentToParent)
    components.forEach(addGithubLinks)
    components.forEach(writeComponents)

    generateSidebar()
})