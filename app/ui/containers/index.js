'use strict'

import React, { Component } from 'react'
const ipcRenderer = require('electron').ipcRenderer

export default class Index extends Component {
    // 构造方法
    constructor(props) {
        super(props)
        this.state = {
            name: 'vecchio'
        }
    }
    /* ES6 模式不支持此方法
        getInitialState: function() {
            return {
                name: 'vecchio'
            };
        }
    */
    componentWillMount() {

    }
    componentDidMount() {

    }
    // 在组件接收到一个新的prop时被调用
    componentWillReceiveProps() {

    }
    // 在组件接收到新的props或者state时被调用
    shouldComponentUpdate() {

    }
    // 在组件接收到新的props或者state但还没有render时被调用
    componentWillUpdate() {

    }
    // 在组件完成更新后立即调用
    componentDidUpdate() {

    }
    // 在组件从 DOM 中移除的时候立刻被调用
    componentWillUnmount() {

    }
    render() {
        return (
            <div style={{width:'100%',height:'100%'}}>
                <webview src="https://www.github.com/" style={{display:'inline-block', width:'100%', height:'100%'}} />
                <div ref="dropObj">
                    {this.state.name}:Drag your file
                </div>
                <h4>首页</h4>
            </div>
        )
    }
}
