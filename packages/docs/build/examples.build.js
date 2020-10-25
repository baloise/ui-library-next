const htmlParser = require('node-html-parser')
const { printSuccess } = require('./log.util')
const { readFile, writeFile, findComponents } = require('./file.util')
const { NEWLINE, EXAMPLES_SEPERATOR, API_SEPERATOR, LEFT_WHITESPACE } = require('./constants')

const readFileContent = (componentFile, done) =>
    readFile(componentFile, (readmeContent) =>
        readFile(componentFile.replace('readme.md', 'index.html'), (indexContent) =>
            done(readmeContent, indexContent)))

const getIntroductionContent = (readmeContent) =>
    readmeContent.indexOf(EXAMPLES_SEPERATOR) >= 0
        ? readmeContent.split(EXAMPLES_SEPERATOR)[0]
        : readmeContent.split(API_SEPERATOR)[0]

const getApiContent = (readmeContent) => readmeContent.split(API_SEPERATOR)[1]

const getCodeExample = (node) => node.innerHTML.toString()
    .split(NEWLINE)
    .map(line => line.substring(LEFT_WHITESPACE))
    .join(NEWLINE)

const buildExampleContent = (indexContent) => {
    const root = htmlParser.parse(indexContent)
    const container = htmlParser.parse(root.querySelector('.container').innerHTML)
    let scriptContent = []
    const text = container.childNodes.map(node => {
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

    text.push('<script type="text/javascript">' + scriptContent.join(NEWLINE + NEWLINE) + '</script>')
    text.push('## API')
    return '## Examples' + NEWLINE + text
        .filter(c => c !== null)
        .filter(c => !c.startsWith(NEWLINE))
        .join(NEWLINE + NEWLINE)
}

const buildNewContent = (readmeContent, indexContent) =>
    getIntroductionContent(readmeContent)
    + EXAMPLES_SEPERATOR + NEWLINE + NEWLINE
    + buildExampleContent(indexContent) + NEWLINE + NEWLINE
    + API_SEPERATOR
    + getApiContent(readmeContent)

const scanComponent = (componentFile) =>
    readFileContent(componentFile, (readmeContent, indexContent) =>
        writeFile(
            componentFile,
            buildNewContent(readmeContent, indexContent),
            () => printSuccess(componentFile)))

findComponents((filepaths) =>
    filepaths.forEach(f => scanComponent(f)))
