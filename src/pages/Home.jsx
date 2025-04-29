// src/pages/Home.jsx
import React from 'react';
import GlobalCounter from '../components/GlobalCounter';
import PerformanceDemo from '../components/PerformanceDemo';

const Home = () => (
    <div>
      <h2>Ana Sayfa</h2>
      <p>Burası Home bileşeni.</p>
      <GlobalCounter />
      <PerformanceDemo />

    </div>
  );
  export default Home;