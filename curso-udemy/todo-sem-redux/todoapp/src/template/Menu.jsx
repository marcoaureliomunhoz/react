import React, { Component } from 'react'
import './Menu.css'

export default class Menu extends Component {

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand"
                           href="#/todos"
                           onClick={() => this.props.clickItem(1)}
                        >
                            <i className="fa fa-calendar-plus-o"></i>&nbsp;&nbsp;TodoApp
                        </a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className={this.props.activeMenu === 1 ? "active" : ""}>
                            <a href="#/todos" onClick={() => this.props.clickItem(1)}>Todo</a>
                        </li>
                        <li className={this.props.activeMenu === 2 ? "active" : ""}>
                            <a href="#/about" onClick={() => this.props.clickItem(2)}>About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
