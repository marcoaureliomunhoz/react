import React, { Component } from 'react'
import './TodoForm.css'
import Grid from '../template/Grid'
import IconButton from '../template/IconButton'

export default class TodoForm extends Component {

    render() {
        const keyHandler = (e) => {
            if (e.key === 'Enter') {
                this.props.clickAdd()
            } else if (e.key === 'Escape') {
                this.props.clearForm()
            }
        }
        return (
            <div role="form" className="todoForm">
                <Grid cols="12 9 10">
                    <input 
                        id="description"
                        className="form-control"
                        placeholder="Add a task"
                        value={this.props.description}
                        onChange={this.props.changeInputAdd}
                        onKeyUp={keyHandler}
                    ></input>
                </Grid>
                <Grid cols="12 3 2">
                    <IconButton btnStyle="primary" icon="plus"
                        click={this.props.clickAdd}/>
                </Grid>
            </div>
        )
    }
}
