import React, { Component } from 'react'
import './Grid.css'

export default class Grid extends Component {

    render() {
        const cols = this.props.cols.split(' ')

        const colxs = `col-xs-${cols[0]}`
        const colsm = `col-sm-${cols[1]}`
        const colmd = `col-md-${cols[2]}`

        return (
            <div className={`${colxs} ${colsm} ${colmd}`}>
                {this.props.children}
            </div>
        )
    }
}