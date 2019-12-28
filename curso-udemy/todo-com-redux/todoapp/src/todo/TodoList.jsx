import React, { Component } from 'react'
import './TodoList.css'
import IconButton from "../template/IconButton";

export default class TodoList extends Component {

    render() {
        const renderRows = () => {
            const list = this.props.list || []
            return list.map(todo => (
                <tr key={todo.id}>
                    <td>{todo.description}</td>
                    <td>
                        <IconButton
                            btnStyle={'danger'}
                            icon={'trash-o'}
                            click={() => this.props.clickDelete(todo.id)} />
                    </td>
                </tr>
            ))
        }

        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        )
    }
}
