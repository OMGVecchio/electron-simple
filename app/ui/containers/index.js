'use strict'

import React, { Component } from 'react'
const ipcRenderer = require('electron').ipcRenderer

export default class Index extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <h4>首页</h4>
        )
    }
}
