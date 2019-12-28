import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import React, {Component} from 'react';
import './App.css';
import Menu from '../template/Menu';
import Routes from './Routes';

export default class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            activeMenu: 1
        }

        this.onClickItem = this.onClickItem.bind(this)
    }

    onClickItem(item) {
        this.setState({ ...this.state, activeMenu: item })
    }

    render() {
        return (
            <div className="App">
                <Menu
                    activeMenu={this.state.activeMenu}
                    clickItem={this.onClickItem}
                />
                <Routes/>
            </div>
        )
    }
}
