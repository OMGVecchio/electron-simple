'use strict'

module.exports = {
    fetchKillCommandByName(name) {
        return `ps aux | grep ${name} | awk \'{print $2}\' | xargs kill -9`
    }
}
