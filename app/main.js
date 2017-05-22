const electron = require('electron')
const path = require('path')
const url = require('url')
const conf = require('../conf');
const winUrl = process.env.NODE_ENV === 'dev'
    ? `http://localhost:${conf.port}/`
    : `file://${__dirname}/XXX`

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
    protocol
} = electron

let win = null

let createWindow = () => {
    win = new BrowserWindow({
        width: '100%',
        height: '100%',
        resizable: true,
        title: 'test'
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

app.on('ready', createWindow)

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
