import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './contexts/ThemeContext';
import { CounterProvider } from './contexts/CounterContext';
import ErrorBoundary from './components/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
    <CounterProvider>
    
    <ErrorBoundary>
      <App/>
    </ErrorBoundary>
      
      </CounterProvider>
    </ThemeProvider>
  </React.StrictMode>
);
