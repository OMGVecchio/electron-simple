'use strict'

import React, { Component } from 'react'
import { Link } from 'react-router'
import './world.styl'

export default class World extends Component {
    render() {
        return (
            <div>
                <p>
                    <Link to='/'>Back</Link>
                </p>
                <p>
                    I am a new page
                </p>
            </div>
        )
    }
}
