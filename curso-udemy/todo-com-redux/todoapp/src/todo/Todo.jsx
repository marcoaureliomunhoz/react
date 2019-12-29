import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './Todo.css'
import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from "./TodoList";
import { getItems } from './TodoActions'

class Todo extends Component {

    componentDidMount() {
        this.props.getItems()
    }

    render() {
        return (
            <div>
                <PageHeader 
                    title='Todo' 
                    details='Manage your tasks'
                />

                <TodoForm />
                <TodoList />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getItems
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
