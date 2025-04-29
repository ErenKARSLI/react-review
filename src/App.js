import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { ThemeContext } from './contexts/ThemeContext';

function App() {
  // Context’ten tema bilgisini ve toggle fonksiyonunu çek
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Tema’ya göre stil
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
