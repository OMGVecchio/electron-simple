'use strict'

const gulp = require('gulp')
const spawn = require('child_process').spawn;

gulp.task('default', () => {
    gulp.watch(['./app/main.js'], () => {
    })
})
