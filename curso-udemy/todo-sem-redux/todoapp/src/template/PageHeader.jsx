import React, { Component } from 'react'
import './PageHeader.css'

export default class PageHeader extends Component {

    render() {
        return (
            <div className="page-header">
                <h1>{this.props.title} <small>{this.props.details}</small></h1>
            </div>
        )
    }
}