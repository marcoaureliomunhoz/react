import React from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { iniCadastro, salvarEditora, excluirEditora } from './EditorasActions'

import './CadEditora.css'

import Topo from '../../componentes/Topo'
import Titulo from '../../componentes/Titulo'
import Botao from '../../componentes/Botao'
import Formulario from '../../componentes/Formulario'
import If from '../../componentes/If'

class CadEditora extends React.Component {

    // constructor(props) {
    //     super(props)
    // }

    componentWillMount() {
        console.log('CadEditora componentWillMount')

        const id = this.props.match.params.id || 0
        this.props.iniCadastro(id)
    }

    render() {
        return (
            <div>
                <Topo/>
                <Titulo nome='Cadastro de Editora'/>
                <div className='barra-botoes'>
                    <Botao texto='Salvar' onClick={() => this.btnSalvarClick()}/>
                    <If test={this.props.valores.Id}>
                    <Botao texto='Excluir' onClick={() => this.btnExcluirClick()}/>
                    </If>
                </div>
                <Formulario id='formCadEditora' onSubmit={this.props.handleSubmit(this.props.salvarEditora)}>
                    <label>Nome</label>
                    <Field name='Nome' component='input' className='w100'/>
                    <br/><br/>
                    <label>E-mail</label>
                    <Field name='Email' component='input' className='w100'/>
                    <br/><br/>
                    <Botao type='submit' texto='Submit'/>
                </Formulario>
            </div>
        )
    }

    btnSalvarClick() {
        console.log('btnSalvarClick: ',this.props.cadastro.values)
        this.props.salvarEditora(this.props.cadastro.values)
        //ou
        //console.log('values: ', this.props.valores)
        //this.props.salvarEditora(this.props.valores)

        //assim não funciona
        //document.querySelector('#formCadEditora').submit();
    }

    btnExcluirClick() {
        console.log('btnExcluirClick: ',this.props.valores.Id)
        this.props.excluirEditora(this.props.valores.Id)
    }
}

CadEditora = reduxForm({
    form: 'CadEditoraForm',
    destroyOnUnmount: false
})(CadEditora)

const selector = formValueSelector('CadEditoraForm')

const mapStateToProps = state => ({
    cadastro : state.form.CadEditoraForm, 
    valores : selector(state, 'Id', 'Nome', 'Email')
})

const mapDispatchToProps = dispatch => bindActionCreators({
    iniCadastro, salvarEditora, excluirEditora
}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(CadEditora)