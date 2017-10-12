'use strict'

import React, { Component } from 'react'

import Sidebar from 'com/sidebar/sidebar'

export default class Index extends Component {
    // 构造方法
    constructor(props) {
        super(props)
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
    // todo 不注释报错：Index.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false
    // 在组件接收到新的props或者state时被调用
    // shouldComponentUpdate() {
    //
    // }
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
            <div className="app-wrap clearfix">
                <div className="app-content-wrap fl">
                    <div className="app-content clearfix">
                        { this.props.children }
                    </div>
                </div>
                <div className="app-side-wrap fl">
                    <Sidebar />
                </div>
            </div>
        )
    }
}
