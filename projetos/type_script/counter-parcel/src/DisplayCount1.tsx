import * as React from 'react';

const DisplayCount1: React.FunctionComponent<{
  count: number;
}> = (props) => {
  return <h2>{props.count}</h2>;
};

/*ou assim*/

// interface Props {
//   count: number;
// }

// const DisplayCount1: React.FunctionComponent<Props> = (props) => {
//   return <h1>{props.count}</h1>;
// };

export default DisplayCount1;