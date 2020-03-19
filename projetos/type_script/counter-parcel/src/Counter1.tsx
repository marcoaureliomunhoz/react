import * as React from 'react';

export default class Counter1 extends React.Component {

    state = {
        count: 0
    };

    increment = () => {
        this.setState({count: this.state.count + 1})
    };

    decrement = () => {
        this.setState({count: this.state.count - 1})
    };

    render() {
        return (
            <div>
                <h1>Counter 1</h1>
                <h2>{this.state.count}</h2>
                <button onClick={this.increment}>[ + ]</button>
                <button onClick={this.decrement}>[ - ]</button>
                <hr/>
            </div>
        )
    }

}