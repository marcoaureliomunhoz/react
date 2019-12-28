import React, { Component } from 'react'
import axios from 'axios'
import './Todo.css'
import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from "./TodoList";

const URL = 'http://localhost:5000/api/todos'

export default class Todo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            description: '',
            list: []
        }

        this.onClickAdd = this.onClickAdd.bind(this)
        this.onChangeInputAdd = this.onChangeInputAdd.bind(this)
        this.onClickDelete = this.onClickDelete.bind(this)
        this.onClearForm = this.onClearForm.bind(this)

        this.refresh()
    }

    onClickAdd() {
        const description = this.state.description
        axios
            .post(URL, { description })
            .then(resp => {
                this.refresh()
            })
    }

    onClickDelete(id) {
        axios
            .delete(`${URL}/${id}`)
            .then(resp => {
                this.refresh()
            })
    }

    onChangeInputAdd(event) {
        this.setState({ ...this.state, description: event.target.value })
    }

    onClearForm() {
        this.setState({ ...this.state, description: '' })
    }

    refresh() {
        axios
            .get(URL)
            .then(resp => {
                this.setState({
                    ...this.state,
                    description: '',
                    list: resp.data
                })
            })
    }

    render() {
        return (
            <div>
                <PageHeader 
                    title='Todo' 
                    details='List and register todos'
                />

                <TodoForm 
                    description={this.state.description}
                    clickAdd={this.onClickAdd}
                    changeInputAdd={this.onChangeInputAdd}
                    clearForm={this.onClearForm}
                />

                <TodoList
                    list={this.state.list}
                    clickDelete={this.onClickDelete}
                />
            </div>
        )
    }
}
