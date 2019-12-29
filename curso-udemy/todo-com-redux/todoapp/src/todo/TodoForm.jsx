import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeFieldValue, clearForm, addTodo } from './TodoFormActions'
import './TodoForm.css'
import Grid from '../template/Grid'
import IconButton from '../template/IconButton'

class TodoForm extends Component {

    constructor(props) {
        super(props)

        this.keyHandler = this.keyHandler.bind(this)
        this.add = this.add.bind(this)
    }

    add() {
        this.props.clickAdd(this.props.description)
    }

    keyHandler = (e) => {
        if (e.key === 'Enter') {
            this.add()
        } else if (e.key === 'Escape') {
            this.props.clearForm()
        }
    }

    render() {
        return (
            <div role="form" className="todoForm">
                <Grid cols="12 9 10">
                    <input 
                        id="description"
                        className="form-control"
                        placeholder="Add a task"
                        value={this.props.description}
                        onChange={this.props.changeInputAdd}
                        onKeyUp={this.keyHandler}
                    ></input>
                </Grid>
                <Grid cols="12 3 2">
                    <IconButton btnStyle="primary" icon="plus"
                        click={this.add}/>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    description: state.todo.description
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        changeInputAdd: changeFieldValue,
        clearForm,
        clickAdd: addTodo
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)