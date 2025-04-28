// src/App.js
import React from 'react';
import Greeting from './components/Greeting';
import Welcome from './components/Welcome';
function App() {
  return (
    <div>
      <h1>Merhaba React!</h1>
      <Greeting />
      <Welcome name="Eren" />
    </div>
  );
}

export default App;
