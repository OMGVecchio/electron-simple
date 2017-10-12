'use strict'

import React, { Component } from 'react'
import { Link } from 'react-router'

import './sidebar.styl'

export default class Sidebar extends Component {
    back() {
        window.history.go(-1)
    }
    render() {
        return (
            <div className='r-sidebar'>
                <div>
                    <img src='http://t5.zbjimg.com/r/page/zbjimg.gif' className='avatar' />
                </div>
                <ul className='menu-item'>
                    <li>
                        <Link to='/'>首页</Link>
                    </li>
                    <li>
                        <Link to='/test'>测试页</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
