'use strict'

const ID = 'configManage'
const db = require('../lowdb')(__dirname)

const electron = require('electron')
const {
    ipcMain
} = electron

ipcMain.on(`${ID}-add`, (event, pathes) => {
    if(pathes.length === 0) return
    const savedPathesConnection = db.get('savePathes')
    const savedPathes = savedPathesConnection.value()
    pathes.forEach(path => {
        if(savedPathes[path] === undefined) savedPathes[path] = true
    })
    db.set('savePathes', savedPathes).write()
})

ipcMain.on(`${ID}-fetch`, (event) => {
    event.sender.send(`${ID}-fetch-cb`, db.get('savePathes').value())
})

// 初始化数据库
+(() => {
    db.defaults({ savePathes: {} })
      .write()
})()
