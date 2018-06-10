'use strict'

const low = require('lowdb')
const path = require('path')
const FileSync = require('lowdb/adapters/FileSync')

module.exports = (dirPath = __dirname, dbName = 'db.json') => {
    const adapter = new FileSync(path.resolve(dirPath, dbName))
    const db = low(adapter)
    return db;
}
