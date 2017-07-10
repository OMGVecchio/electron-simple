'use strict'

import React, { Component } from 'react'
import { render } from 'react-dom'
import { Switch, Router, IndexRoute, Route, hashHistory, Link } from 'react-router'
import 'r/css/common.styl'

import Sidebar from 'com/sidebar/sidebar'

import Index from 'con/index'
import Test from 'con/test'

render(
    <div className="app-wrap clearfix">
        <div className="content-wrap fl">
            <div className="content clearfix">
                <Router history={ hashHistory }>
                    <Route path='/' component={ Index } />
                    <Route path='/test' component={ Test } />
                </Router>
            </div>
        </div>
        <div className="side-wrap fl">
            <Sidebar />
        </div>
    </div>,
    document.getElementById('app')
)
