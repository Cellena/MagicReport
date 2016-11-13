import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import style from './styles/main.scss';
import App from './components/app.jsx'
import Hello from './components/hello.jsx'
import World from './components/world.jsx'

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
        </Route>
        <Route path="/hello" component={Hello}/>
        <Route path="/world" component={World}/>
    </Router>
), document.getElementById('root'));