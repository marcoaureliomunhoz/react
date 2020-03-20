import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from './home/Home'
import ListTodo from './todo/ListTodo'
import FormTodo from './todo/FormTodo'

export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/todo/new' component={FormTodo} />
        <Route path='/todo/list' component={ListTodo} />
        <Route path='/todo' component={ListTodo} />
        <Redirect from='*' to='/' />
    </Switch>