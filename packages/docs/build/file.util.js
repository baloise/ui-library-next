const fs = require('fs')
const glob = require('glob')
const { printNotFound, printError } = require('./log.util')

const readFile = (filepath, done) => fs.readFile(filepath, 'utf8', (err, content) => err
    ? printNotFound(filepath)
    : done(content))

const forEachComponent = (files, done) => files.forEach(f => done(f))

const findComponents = (done) =>
    glob('lib/components/**/readme.md', {}, (err, files) => err
        ? printError('Could not find any components', err)
        : done(files))

const writeFile = (filepath, content, done) =>
    fs.writeFile(filepath, content, (err) => err
        ? printError(`Could not write file "${filepath}"`, err)
        : done())

module.exports = {
    readFile,
    writeFile,
    findComponents,
    forEachComponent,
}
