import React from 'react'

export default class ComponenteClasse extends React.Component {
    render() {
        return (
            <h1>Olá {this.props.valor || 'Padrão'}</h1>
        )
    }
}