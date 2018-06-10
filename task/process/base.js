'use strict'

const exec = require('child_process').exec

class Process {
    constructor(command, opts) {
        this.command = command
        this.process = null
    }
    run() {
        this.process = exec(this.command)
        this.process.stdout.on('data', msg => {
            console.log(msg)
        })
        this.process.stderr.on('data', err => {
            console.log(err)
        })
    }
    kill() {
        this.process.kill()
        this.process = null
    }
    reload() {
        // warning: simple kill may cause error
        this.kill()
        this.run()
    }
}

module.exports = Process
