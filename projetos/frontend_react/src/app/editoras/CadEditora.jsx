import React from 'react'
import axios from 'axios'

import './CadEditora.css'

import Topo from '../../componentes/Topo'
import Titulo from '../../componentes/Titulo'
import Botao from '../../componentes/Botao'
import Formulario from '../../componentes/Formulario'
import consts from '../Constantes'
import Editora from '../../models/Editora'

class CadEditora extends React.Component {

    iniCadastro(id) {
        console.log('CadEditora iniCadastro: ', id)

        if (id) {
            axios.get(`${consts.BASE_URL}/editora/${id}`)
                .then(resp => {
                    this.setState({...this.state, cadastro: resp.data})
                })
        } else {
            this.setState({...this.state, cadastro: new Editora()})
        }
    }

    constructor(props) {
        console.log('CadEditora constructor')

        super(props)

        this.state = { 
            cadastro: new Editora()
        }

        const id = this.props.match.params.id || 0
        if (id)
            this.iniCadastro(id)
    }

    componentWillMount() {
        console.log('CadEditora componentWillMount')
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
                        onChange={(e) => this.inputChange(e)}
                        value={this.state.cadastro.Nome}/>
                    <br/><br/>
                    <label>E-mail</label>
                    <input name='Email' className='w100'
                        onChange={(e) => this.inputChange(e)}
                        value={this.state.cadastro.Email}/>
                </Formulario>
            </div>
        )
    }

    inputChange(event) {
        console.log('CadEditora inputChange')
        //console.log('CadEditora inputChange: ', event.target)

        var newState = { ...this.state}
        newState.cadastro[event.target.name] = event.target.value
        this.setState(newState)

        //console.log('CadEditora inputChange: ', this.state)
        //console.log('CadEditora inputChange: ', newState)
    }

    btnSalvarClick() {
        //console.log('btnSalvarClick: ', this.state.cadastro)
        const editora = this.state.cadastro
        //console.log('CadEditora btnSalvarClick: ',editora)
        if (editora.Id) {
            axios.put(`${consts.BASE_URL}/editora/${editora.Id}`, editora)
                .then(resp => {
                    console.log('ok! => ',resp.data)
                })
                .catch(resp => {
                    console.log('erro!') 
                })
            
        } else {
            axios.post(`${consts.BASE_URL}/editora`, editora)
                .then(resp => {
                    console.log('ok! => ',resp.data)
                    this.iniCadastro()
                })
                .catch(resp => {
                    console.log('erro!') 
                })
        }
    }
}

export default CadEditora