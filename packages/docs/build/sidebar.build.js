const { readFile, findComponents, writeFile } = require('./file.util')
const { SIDEBAR_FILEPATH, SIDEBAR_SEPERATOR_START, SIDEBAR_SEPERATOR_END, NEWLINE } = require('./constants')
const { printSuccess } = require('./log.util')

const buildComponent = (path) => ({
    name: path.replace('lib/components/', '').replace('/readme.md', ''),
    path,
})

const getSidebarStart = (content) => content.split(SIDEBAR_SEPERATOR_START)[0] + SIDEBAR_SEPERATOR_START

const getSidebarEnd = (content) => NEWLINE + SIDEBAR_SEPERATOR_END + content.split(SIDEBAR_SEPERATOR_END)[1]

findComponents((filepaths) => {
    const components = filepaths.map(buildComponent)
    readFile(SIDEBAR_FILEPATH, (sidebarContent) => {
        const newContent = [getSidebarStart(sidebarContent)]
        newContent.push(NEWLINE + '- **Components**' + NEWLINE)
        components.forEach(c => newContent.push(`  - [${c.name}](${c.path})`))
        newContent.push(getSidebarEnd(sidebarContent))
        writeFile(
            SIDEBAR_FILEPATH,
            newContent.join(NEWLINE),
            () => printSuccess(SIDEBAR_FILEPATH))
    })
})
