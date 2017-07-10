'use strict'

import React, { Component } from 'react'
import { Router, Route } from 'react-router'

import Clock from 'com/clock/clock'
import World from 'com/world/world'
import Canvas from 'com/canvas/canvas'

export default class Test extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <h4>这是测试页面</h4>
        )
    }
}
