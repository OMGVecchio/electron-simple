'use strict'

import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import 'r/css/common.styl'

import Layout from 'con/Layout'
import Index from 'con/index'
import ConfigManage from 'con/config-manage'
import Weather from 'con/weather'

render(
    /**
     *  history 三种模式：browserHistory、hashHistory、createMemoryHistory
     *  todo：采用 hashHistory 报错 [ You cannot PUSH the same path using hash history ]
     */
    <Router history={ hashHistory }>
        <Route path='/' component={ Layout }>
            <IndexRoute component={ Index } />
            <Route path='configManage' component={ ConfigManage } />
            <Route path='weather' component={ Weather } />
        </Route>
    </Router>,
    document.getElementById('app')
)
