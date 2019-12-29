import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deleteItem } from './TodoListActions'
import './TodoList.css'
import IconButton from "../template/IconButton";

class TodoList extends Component {

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

const mapStateToProps = (state) => ({
    list: state.todo.list
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        clickDelete: deleteItem
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)