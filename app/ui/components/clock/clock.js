'use strict'

import React, { Component } from 'react'
import { Link } from 'react-router'
import render from 'react-dom'
import './clock.styl'

export default class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date().toLocaleTimeString(),
            count: 1
        }
    }
    handleTimer() {
        setInterval(() => this.setTimer(), 1000)
    }
    setTimer() {
        this.setState({
            time: new Date().toLocaleTimeString(),
            count: ++this.state.count
        })
    }
    componentDidMount() {
        this.handleTimer()
    }
    render() {
        window.state = this.state
        return (
            <div className='clock'>
                <p>
                    the time is {this.state.time}, the count is {this.state.count}
                </p>
                <p>
                    <Link to='/test'>Go new</Link>
                </p>
                <p>
                    <Link to='/canvas'>Go canvas</Link>
                </p>
            </div>
        )
    }
}
