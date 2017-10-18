'use strict'

import React, { Component } from 'react'

const electron = require('electron')
const { ipcRenderer } = electron

export default class ErrFeedback extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showMsg: false,
            msg: ''
        }
    }
    componentDidMount() {
        this.register()
    }
    register() {
        ipcRenderer.on('common-err', (event, msg) => {
            this.state.showMsg = true
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.showMsg === true
                    ? <span style='position: fixed;top: 50%;left: 50%;' onClick={ () => { this.setState({showMsg: false})} }>
                        出错了
                      </span>
                    : ''
                }
            </div>
        )
    }
}
