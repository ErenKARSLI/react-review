import React, { useState } from 'react';

const Counter = () => {
  // count adlı state, setCount ile güncelleniyor; başlangıç değeri 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Sayaç: {count}</p>
      <button onClick={() => setCount(count + 1)}>Arttır</button>
      <button onClick={() => setCount(count - 1)}>Azalt</button>
    </div>
  );
};

export default Counter;
