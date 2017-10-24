'use strict'

import React, { Component } from 'react'

import Sidebar from 'com/sidebar/sidebar'
import ErrMsg  from 'com/err-feedback/err-feedback'
import AuthInput from 'com/auth-input/auth-input'

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
    /* 解决 this 指针问题，需要引入 babel 的 transform-class-properties 插件
        attrName = xxx
     */
    componentWillMount() {

    }
    componentDidMount() {
        // 改方法支持参数函数
        this.setState((prevState, props) => {

        })
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
                <ErrMsg />
                <AuthInput />
            </div>
        )
    }
}
