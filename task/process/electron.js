'use strict'

const Process = require('./base')
const utils = require('../../utils/shell')
const exec = require('child_process').exec

class Electron extends Process {
    constructor(command, opts) {
        super(command, opts)
    }
    kill() {
        exec(utils.fetchKillCommandByName('electron'), (err, data) => {
            this.process = null
        })
    }
    reload() {
        exec(utils.fetchKillCommandByName('electron'), (err, data) => {
            this.run()
        })
    }
}

module.exports = Electron
