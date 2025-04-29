import React, { useState, useCallback } from 'react';
import ExpensiveComponent from './ExpensiveComponent';
import ExpensiveWithMemo from './ExpensiveWithMemo';

const PerformanceDemo = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  // count güncellendiğinde ExpensiveComponent yeniden render olmasın
  const incrementCount = () => setCount(c => c + 1);

  // number değiştiğinde ExpensiveComponent render olmalı
  const incrementNumber = useCallback(() => {
    setNumber(n => n + 1);
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h3>Performans Demo</h3>
      <button onClick={incrementCount}>Update Count ({count})</button>{' '}
      <button onClick={incrementNumber}>Update Number ({number})</button>
      <ExpensiveWithMemo number={number}/>
    </div>
  );
};

export default PerformanceDemo;
