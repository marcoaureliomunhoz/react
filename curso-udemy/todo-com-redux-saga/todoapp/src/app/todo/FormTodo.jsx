import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { requestSaveSaga, requestSave, formReset } from './TodoActions'
import todoTypes from './TodoTypes'

class FormTodo extends Component {

    constructor(props) {
        super(props)
        this.save = this.save.bind(this)
    }

    componentDidMount() {
        this.props.formReset()
    }

    save(todo) {
        this.props.requestSaveSaga(todo)
        // this.props.requestSave(todo)
    }

    render() {
        if (this.props.lastSavedId) {
            return <Redirect to='/todo' />
        }

        return (
            <div>
                <h1>Form Todo</h1>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/todo'>List</Link></li>
                </ul>

                <hr/>

                <form onSubmit={this.props.handleSubmit(this.save)}>
                    <label>Description</label><br/>
                    <Field name='description' component='input'/><br/>
                    <br/>
                    <button type='submit'>Save</button>
                </form>
            </div>
        );
    }

}

FormTodo = reduxForm({
    form: todoTypes.FORM_ID,
    destroyOnUnmount: false
})(FormTodo)
const selector = formValueSelector('FormTodo')

const mapStateToProps = state => ({
    lastSavedId : state.todo.lastSavedId,
    values : selector(state, 'id', 'description')
})
const mapDispatchToProps = dispatch => bindActionCreators({
    requestSaveSaga, requestSave, formReset
}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(FormTodo)