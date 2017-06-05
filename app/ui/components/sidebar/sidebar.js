'use strict'

import React, { Component } from 'react'
import { Link } from 'react-router'
import render from 'react-dom'
import './sidebar.styl'

export default class Sidebar extends Component {
    render() {
        return (
            <div className='r-sidebar'>
                <div>
                    <img src='http://t5.zbjimg.com/r/page/zbjimg.gif' className='avatar' />
                </div>
                <ul>
                    <li>
                        <Link to='/'>首页</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
