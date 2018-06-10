'use strict'

const electron = require('electron')
const path = require('path')
const url = require('url')
const conf = require('../../conf')

const winUrl = process.env.NODE_ENV === 'production'
    ? `file:///${path.resolve(__dirname, '../fe/index.html')}`
    : `http://127.0.0.1:${conf.port}/`
    
const {
    app,
    BrowserWindow,
    globalShortcut,
    clipboard,
    contentTracing,
    session,
    desktopCapturer,
    dialog,
    ipcMain,
    ipcRenderer,
    Menu,
    MenuItem,
    Tray,
    net,
    // powerMonitor, must require after win-ready
    // protocol, must require app-ready
    shell
} = electron

let win = null

const createWindow = () => {
    win = new BrowserWindow({
        width: 900,
        height: 900,
        resizable: true,
        title: '练手项目',
        show: true,
        backgroundColor: '#002b36'
    })

    win.on('ready-to-show', function() {
        win.show()
        win.focus()
    })

    // trun on console
    win.webContents.openDevTools()

    // TODO 瞎 BB，待研究
    // dev 阶段，入口协议为 http 和 file 应该都可以吧。两种模式可参见 Vue 和 React
    // 自定义入口文件，有些资源需要手动拼接；直接用 webpackDevServer ，形式简单
    win.loadURL(winUrl);

    win.on('closed', () => {
        win = null
    })
}

// 应用程序完成基础的启动
app.on('will-finish-launching', () => {
    // Todo 启动崩溃报告和自动更新
})

// 完成初始化
app.on('ready', createWindow)

// 应用被激活时触发，如点击 dock 图标 [OS X]
app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})

// 所有窗口都被关闭
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

// 关闭窗口
app.on('before-quit', () => {})

// 所有的窗口已经被关闭，应用即将退出
app.on('will-quit', () => {})

// 应用程序正在退出
app.on('quit', () => {})

// 在应用中打开一个文件时触发 [OS X]
app.on('open-file', () => {})

// 在应用中打开一个url的时候被触发
app.on('open-url', () => {})

require('./modules/config-manage/index')
