import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar'
import Body from './components/Body'
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <Navbar />
        <Body />
    </div>
  );
}

export default App;