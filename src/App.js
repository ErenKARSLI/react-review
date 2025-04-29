import React, { useContext, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ThemeContext } from './contexts/ThemeContext';

// lazy import
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navStyle = {
    background: theme === 'light' ? '#f0f0f0' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '1rem',
    textAlign: 'center'
  };

  return (
    <BrowserRouter>
      <nav style={navStyle}>
        <Link to="/" style={{ marginRight: '1rem', color: 'inherit' }}>Home</Link>
        <Link to="/about" style={{ marginRight: '1rem', color: 'inherit' }}>About</Link>
        <button onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark Mod' : '☀️ Light Mod'}
        </button>
      </nav>

      {/* Kod bölme: lazy yüklemeyi sarmala */}
      <Suspense fallback={<div style={{ textAlign: 'center' }}>Yükleniyor...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
