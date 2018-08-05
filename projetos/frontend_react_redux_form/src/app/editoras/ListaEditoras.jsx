import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './ListaEditoras.css';

import Topo from '../../componentes/Topo'
import Titulo from '../../componentes/Titulo'
import Botao from '../../componentes/Botao'

import { getLista, excluirEditoraList } from './EditorasActions';

class ListaEditoras extends Component {
    componentWillMount() {
        console.log('ListaEditoras componentWillMount')

        this.props.getLista()
    }

    render() {
        return (
            <div>
                <Topo/>
                <Titulo nome='Editoras'/>
                <div className='barra-botoes'>
                    <Botao texto='Nova' onClick={() => this.btnNovaClick()}/>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        );
    }

    renderRows() {
        const style = {
            maxWidth: '100px'
        }
        const list = this.props.lista || []
        return list.map(item => (
            <tr key={item.Id}>
                <td>{item.Nome}</td>
                <td>{item.Email}</td>
                <td style={style}>
                    <a href={`#/alterar-editora/${item.Id}`}>Alterar</a> &nbsp;
                    <Botao texto='Excluir' onClick={() => this.props.excluirEditoraList(item.Id)}/>
                </td>
            </tr>
        ))
    }

    btnNovaClick() {
        //console.log('btnNovaClick')
        this.props.history.push('/nova-editora')
    }
}

const mapStateToProps = state => ({
    lista : state.editoras.lista
})
const mapDispatchToProps = dispatch => bindActionCreators({
    getLista, excluirEditoraList
}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(ListaEditoras)