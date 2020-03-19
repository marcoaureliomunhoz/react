import * as React from 'react';

interface Props {
    initialValue: number;
};

interface State {
    currentValue: number;
};

export default class Counter2 extends React.Component<Props, State> {

    state: State = {
        currentValue: 0
    };

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.setState({currentValue: this.props.initialValue})
    }

    increment = () => {
        this.setState({currentValue: this.state.currentValue + 1})
    };

    decrement = () => {
        this.setState({currentValue: this.state.currentValue - 1})
    };

    render() {
        return (
            <div>
                <h1>Counter 2</h1>
                <h2>{this.state.currentValue}</h2>
                <button onClick={this.increment}>[ + ]</button>
                <button onClick={this.decrement}>[ - ]</button>
                <hr/>
            </div>
        )
    }

};