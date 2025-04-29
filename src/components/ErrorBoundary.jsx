// src/components/ErrorBoundary.jsx
import React from 'react';

export default class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', textAlign: 'center', color: 'red' }}>
          <h2>Üzgünüz, bir hata oluştu.</h2>
        </div>
      );
    }
    return this.props.children;
  }
}
