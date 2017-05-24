'use strict'

import React, { Component } from 'react'
import { render } from 'react-dom'
import { Switch, Router, IndexRoute, Route, hashHistory, Link } from 'react-router'
import Clock from 'components/clock/clock'
import World from 'components/world/world'

render(
    <div>
        <Router history={ hashHistory }>
            <Route path='/' component={ Clock } />
            <Route path='/test' component={ World } />
        </Router>
    </div>,
    document.getElementById('app')
)
