const electron = require('electron');
const path = require('path')
const url = require('url')
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
} = electron;

let win = null;

let createWindow = () => {
    win = new BrowserWindow({
        width: '100%',
        height: '100%',
        resizable: true,
        title: 'test'
    });

    // trun on console
    win.webContents.openDevTools();

    win.loadURL(url.format({
        pathname: path.join(__dirname, './ui/index.html'),
        protocol: 'file:',
        slashes: true
    }));

    win.on('closed', () => {
        win = null;
    });
};

app.on('ready', createWindow);

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
