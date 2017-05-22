import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, Link } from 'react-router'

class Hello extends Component {
    render() {
        return (
            <div>
                hello I'm a route
            </div>
        )
    }
}

render(
    <div>
        asdsad
        <Router history={ hashHistory }>
            <Route path="/" component={ Hello } />
        </Router>
    </div>,
    document.getElementById('app')
)
