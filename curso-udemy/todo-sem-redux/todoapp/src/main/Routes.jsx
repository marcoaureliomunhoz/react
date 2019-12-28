import React from 'react'
import { Route, Redirect } from 'react-router'
import { HashRouter } from 'react-router-dom'

import Todo from '../todo/Todo'
import About from '../about/About'

export default props => (
    <HashRouter>
        <Route path='/todos' component={Todo} />
        <Route path='/about' component={About} />
        <Redirect from="*" to='/todos' />
    </HashRouter>
)