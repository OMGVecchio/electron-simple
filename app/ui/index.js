'use strict'

import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import 'r/css/common.styl'

import Layout from 'con/Layout'
import Index from 'con/index'
import configManage from 'con/config-manage'

render(
    /**
     *  history 三种模式：browserHistory、hashHistory、createMemoryHistory
     *  todo：采用 hashHistory 报错 [ You cannot PUSH the same path using hash history ]
     */
    <Router history={ hashHistory }>
        <Route path='/' component={ Layout }>
            <IndexRoute component={ Index } />
            <Route path='configManage' component={ configManage } />
        </Route>
    </Router>,
    document.getElementById('app')
)
