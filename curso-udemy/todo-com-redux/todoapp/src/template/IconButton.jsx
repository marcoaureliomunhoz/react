import React, { Component } from 'react'
import './IconButton.css'
import If from './If'

export default class IconButton extends Component {

    render() {
        return (
            <If test={!this.props.hide}>
                <button className={'btn btn-' + this.props.btnStyle}
                    onClick={this.props.click}
                >
                    <i className={'fa fa-' + this.props.icon}></i>
                </button>
            </If>
        )
    }
}