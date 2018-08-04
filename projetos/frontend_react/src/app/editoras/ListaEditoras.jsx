import React, { Component } from 'react';
import axios from 'axios'
import './ListaEditoras.css';

import Topo from '../../componentes/Topo'
import Titulo from '../../componentes/Titulo'
import Botao from '../../componentes/Botao'
import consts from '../Constantes'

class ListaEditoras extends Component {

    getLista() {
        console.log(`ListaEditoras getLista de ${consts.BASE_URL}`)

        axios.get(`${consts.BASE_URL}/editoras`)
            .then(resp => {
                this.setState({...this.state, lista: resp.data})
            })
    }

    constructor(props) {
        console.log('ListaEditoras constructor')

        super(props)

        this.state = { 
            lista: []
        }
    }

    componentWillMount() {
        console.log('ListaEditoras componentWillMount')

        this.getLista()
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
        const list = this.state.lista || []
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

export default ListaEditoras