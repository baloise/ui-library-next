const htmlParser = require('node-html-parser')
const { NEWLINE, LEFT_WHITESPACE } = require('../constants')

const getCodeExample = (node) => node.innerHTML.toString()
    .split(NEWLINE)
    .map(line => line.substring(LEFT_WHITESPACE))
    .join(NEWLINE)

const parseExamples = (component) => {
    if (component.examples) {
        const root = htmlParser.parse(component.examples)
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
            return [
                `## Examples`,
                '',
                ...content.filter(c => c !== null).filter(c => !c.startsWith(NEWLINE))
            ].join(NEWLINE)
        }
    }
    return ''
}

module.exports = {
    parseExamples,
}
