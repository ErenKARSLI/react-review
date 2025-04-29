import React from 'react';
import { useCounter } from '../contexts/CounterContext';

const GlobalCounter = () => {
  const { state, dispatch } = useCounter();

  return (
    <div style={{ marginTop: '1rem' }}>
      <p>Küresel Sayaç: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Arttır</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Azalt</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Sıfırla</button>
    </div>
  );
};

export default GlobalCounter;
