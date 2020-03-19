import * as React from 'react';
import { render } from 'react-dom';

import Counter1 from './Counter1';
import Counter2 from './Counter2';
import Counter3 from './Counter3';
import Counter4 from './Counter4';

render(
    <div>
        <Counter1/>
        <Counter2 initialValue={5}/>
        <Counter3/>
        <Counter4/>
    </div>
, document.getElementById('main'));