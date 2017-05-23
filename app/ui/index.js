'use strict'

import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, IndexRoute, Route, hashHistory, Link } from 'react-router'
import Hello from 'components/hello/hello'
import World from 'components/world/world'

render(
    <div>
        <Router history={ hashHistory }>
            <Route path='/' component={ Hello } />
            <Route path='/test' component={ World } />
        </Router>
    </div>,
    document.getElementById('app')
)
