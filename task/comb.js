'use strict'

const Process = require('./process/base')
const Electron = require('./process/electron')
const gulp = require('gulp')
const path = require('path')

const electron = new Electron('npm run electron')
const webpack  = new Process('npm run server')

electron.run()
webpack.run()

gulp.watch(path.resolve(__dirname, '../app/main.js'), () => {
    electron.reload()
})
