import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { UserProvider } from './contexts/UserContext'
import { theme } from './modules/ThemeModule'
import ClientIdentify from './pages/ClientIdentify/ClientIdentify'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'

export const Routes = {
    Index: '/',
    Home: '/home',
    Login: '/login',
    ClientIdentify: '/set-client'
}

const AppRoutes: React.FC = () => (
    <ThemeProvider theme={theme}>
        <UserProvider>
            <Router>
                <Switch>
                    <Route path={Routes.ClientIdentify} exact component={ClientIdentify} />
                    <Route path={Routes.Login} exact component={Login} />
                    <Route path={Routes.Home} exact component={Home} />
                    <Route path={Routes.Index} exact component={Home} />
                </Switch>
            </Router>
        </UserProvider>
    </ThemeProvider>
)

export default AppRoutes