// src/components/ExpensiveWithMemo.jsx
import React, { useMemo } from 'react';

// Ağır iş simülasyonu
function heavyCompute() {
  let total = 0;
  for (let i = 0; i < 100_000_000; i++) {
    total += i;
  }
  return total;
}

const ExpensiveWithMemo = ({ number }) => {
  console.log('ExpensiveWithMemo render');

  // only re-compute when "number" değiştiğinde
  const result = useMemo(() => heavyCompute(), [number]);

  return (
    <div style={{ border: '1px solid #999', padding: '.5rem', marginTop: '1rem' }}>
      <p>Prop olarak gelen sayı: {number}</p>
      <p>useMemo ile hesap sonucu: {result}</p>
    </div>
  );
};

export default ExpensiveWithMemo;
