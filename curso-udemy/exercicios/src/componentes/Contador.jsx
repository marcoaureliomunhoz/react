import React from 'react'

export default class Contador extends React.Component {
    state = {
        numero: this.props.numeroInicial
    }

    maisUm = () => {
        console.log(this.state)
        this.setState({ numero: this.state.numero + 1 })
    }

    menosUm = () => {
        console.log(this.state)
        this.setState({ numero: this.state.numero - 1 })
    }

    render() {
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
            </div>
        )
    }
}