'use strict'

import React, { Component } from 'react'
import { Link } from 'react-router'
import render from 'react-dom'
import style from './clock.styl'

export default class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }
    handleTimer() {
        setTimeout(() => this.setTimer(), 1000)
    }
    setTimer() {
        this.state.time = new Date().toLocaleTimeString()
        this.render()
    }
    componentDidMount() {
        this.handleTimer()
    }
    render() {
        window.state = this.state
        return (
            <div className={style.body}>
                <p>
                    the time is {this.state.time}
                </p>
                <p>
                    <Link to='/test'>Go new</Link>
                </p>
            </div>
        )
    }
}
