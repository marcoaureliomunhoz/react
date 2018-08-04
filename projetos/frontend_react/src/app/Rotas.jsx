import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from './home/Home'
import ListaEditoras from './editoras/ListaEditoras'
import CadEditora from './editoras/CadEditora'

export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/editoras' component={ListaEditoras} />
        <Route path='/nova-editora' component={CadEditora} />
        <Route path='/alterar-editora/:id' component={CadEditora} />
        <Redirect from='*' to='/' />
    </Switch>