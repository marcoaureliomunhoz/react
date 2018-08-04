import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { defCadastro, iniCadastro, salvarEditora } from './EditorasActions'

import './CadEditora.css'

import Topo from '../../componentes/Topo'
import Titulo from '../../componentes/Titulo'
import Botao from '../../componentes/Botao'
import Formulario from '../../componentes/Formulario'

class CadEditora extends React.Component {

    componentWillMount() {
        //console.log('componentWillMount: ',this.props)
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
                </div>
                <Formulario>
                    <label>Nome</label>
                    <input name='Nome' className='w100'
                        onChange={this.props.defCadastro}
                        value={this.props.cadastro.Nome}/>
                    <br/><br/>
                    <label>E-mail</label>
                    <input name='Email' className='w100'
                        onChange={this.props.defCadastro}
                        value={this.props.cadastro.Email}/>
                </Formulario>
            </div>
        )
    }

    btnSalvarClick() {
        //console.log('btnSalvarClick: ', this.props.cadastro)
        this.props.salvarEditora(this.props.cadastro)
    }
}

const mapStateToProps = state => ({
    cadastro: state.editoras.cadastro
})
const mapDispatchToProps = dispatch => bindActionCreators({
    defCadastro, iniCadastro, salvarEditora
}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(CadEditora)