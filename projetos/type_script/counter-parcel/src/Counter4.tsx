import * as React from 'react';
import DisplayCount2 from './DisplayCount2';

interface Props {}

interface State {
  count: number;
};

export default class Counter3 extends React.Component<Props, State> {
  
  state: State = {
    count: 0,
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render () {
    return (
      <div>
        <h1>Counter 4</h1>
        <DisplayCount2 count={this.state.count}/>
        <button onClick={this.increment}>[ + ]</button>
        <button onClick={this.decrement}>[ - ]</button>
        <hr/>
      </div>
    );
  }

}