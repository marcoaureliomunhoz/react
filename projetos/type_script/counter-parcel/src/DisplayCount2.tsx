import * as React from 'react';

interface Props {
  count?: number;
}

export default class DisplayCount2 extends React.Component<Props> {
  
  static defaultProps: Props = {
    count: 10
  };

  render () {
    return <h2>{this.props.count}</h2>;
  }

}