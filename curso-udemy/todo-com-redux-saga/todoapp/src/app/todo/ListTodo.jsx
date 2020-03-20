import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { 
    requestListSaga, requestList,
    requestDeleteSaga, requestDelete
} from './TodoActions'

class ListTodo extends Component {

    componentDidMount() {
        this.props.requestListSaga()
        // this.props.requestList()
    }

    renderList() {
        const list = this.props.list || []
        return list.map(item => (
            <li key={item.id}>
                {item.description}
                &nbsp;&nbsp;
                <button onClick={() => this.props.requestDeleteSaga(item.id)}>Delete</button>
            </li>
        ))
    }

    render() {
        return (
            <div>
                <h1>List Todo</h1>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/todo/new'>New</Link></li>
                </ul>

                <hr/>

                <ul>
                    {this.renderList()}
                </ul>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    list: state.todo.list
})
const mapDispatchToProps = dispatch => bindActionCreators({
    requestListSaga, requestList,
    requestDeleteSaga, requestDelete
}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(ListTodo)