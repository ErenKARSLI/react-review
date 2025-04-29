import React from 'react';

// Ağır iş (heavy computation) simülasyonu:
function heavyCompute() {
  let total = 0;
  for (let i = 0; i < 100_000_000; i++) {
    total += i;
  }
  return total;
}

function ExpensiveComponent({ number }) {
  console.log('ExpensiveComponent render');
  const result = heavyCompute();

  return (
    <div style={{ border: '1px solid #999', padding: '0.5rem', marginTop: '1rem' }}>
      <p>Prop olarak gelen sayı: {number}</p>
      <p>Ağır hesap sonucu: {result}</p>
    </div>
  );
}

// React.memo ile sarmalayarak yalnız prop "number" değiştiğinde yeniden render et
export default React.memo(ExpensiveComponent);
