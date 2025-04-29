// src/App.js
import React from 'react';
import Greeting from './components/Greeting';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import UserList from './components/UserList';



function App() {
  return (
    <div>
      <h1>Merhaba React!</h1>
      <Greeting />
      <Welcome name="Eren" />
      <Counter/>
      <h3>Kullanıcı Listesi:</h3>
      <UserList />
      
    </div>
  );
}

export default App;
