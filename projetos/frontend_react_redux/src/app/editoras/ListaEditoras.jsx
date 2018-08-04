import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './ListaEditoras.css';

import Topo from '../../componentes/Topo'
import Titulo from '../../componentes/Titulo'
import Botao from '../../componentes/Botao'

import { getLista } from './EditorasActions';

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
        const list = this.props.lista || []
        return list.map(item => (
            <tr key={item.Id}>
                <td>{item.Nome}</td>
                <td>{item.Email}</td>
                <td><a href={`#/alterar-editora/${item.Id}`}>Alterar</a></td>
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
    getLista
}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(ListaEditoras)