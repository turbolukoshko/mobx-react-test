import { observer } from 'mobx-react-lite';
import React from 'react';
import counter from '../../store/counter.js';

const Counter = observer(() => {
  return(
    <div>
      <h1>Counter: {counter.counter}</h1>
      <button onClick={() => counter.increment()} >+</button>
      <button onClick={() => counter.decrement()}>-</button>
    </div>
)});

export default Counter;
