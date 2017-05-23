'use strict'

import React, { Component } from 'react'
import { Link } from 'react-router'
import render from 'react-dom'
import './hello.styl'

export default class Hello extends Component {
    render() {
        return (
            <div>
                <p>
                    <Link to='/test'>Go new</Link>
                </p>
            </div>
        )
    }
}
