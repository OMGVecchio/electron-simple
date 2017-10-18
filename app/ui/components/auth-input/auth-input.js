'use strict'

import React, { Component } from 'react'

const electron = require('electron')
const { ipcRenderer, remote } = electron

export default class AuthInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showPwd: false,
            pwd: ''
        }
    }
    register() {
        ipcRenderer.on('commom-pwd', () => {
            this.setState({
                showPwd: true
            })
        })
    }
    componentDidMount() {
        this.register()
    }
    render() {
        return (
            <div>
                {
                    this.state.showPwd === true
                    ? <input value={this.state.pwd} onChange={ (e) => { this.setState({pwd: e.target.value}) } } onClick={ () => { this.setState({showPwd: false}) } }/>
                    : ''
                }
            </div>
        )
    }
}
