'use strict'

const ID = 'configManage'
const db = require('../lowdb')(__dirname)

const electron = require('electron')
const {
    ipcMain
} = electron

const fs = require('fs')
const cp = require('child_process')

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

ipcMain.on(`${ID}-fetchFileContent`, (event, pathLink) => {
    fs.readFile(pathLink, (err, file) => {
        event.sender.send(`${ID}-fetchFileContent-cb`, file)
    })
})

ipcMain.on(`${ID}-changeFileContent`, (event, filePath, fileContent) => {
    cp.exec(`echo "${fileContent}" | sudo tee ${filePath}`, (err) => {
        if(err) {
            cp.exec(`echo wc19930207! | sudo -S echo "${fileContent}" | sudo tee ${filePath}`, (err) => {
                if(err) {

                }
            })
        }
    })
    // fs.writeFile(filePath, fileContent, (err) => {
    //     if(!err) return
    //     else console.log(err)
    // })
})

// 初始化数据库
+(() => {
    db.defaults({ savePathes: {} })
      .write()
})()