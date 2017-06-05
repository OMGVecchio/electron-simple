'use strict'

import React, { Component } from 'react'
import { render } from 'react-dom'
import { Switch, Router, IndexRoute, Route, hashHistory, Link } from 'react-router'
import 'resource/css/common.styl'
import Clock from 'components/clock/clock'
import World from 'components/world/world'
import Sidebar from 'components/sidebar/sidebar'
import Canvas from 'components/canvas/canvas'

render(
    <div className="app-wrap clearfix">
        <div className="content-wrap fl">
            <div className="content clearfix">
                <Router history={ hashHistory }>
                    <Route path='/' component={ Clock } />
                    <Route path='/test' component={ World } />
                    <Route path='/canvas' component={ Canvas } />
                </Router>
            </div>
        </div>
        <div className="side-wrap fl">
            <Sidebar />
        </div>
    </div>,
    document.getElementById('app')
)
