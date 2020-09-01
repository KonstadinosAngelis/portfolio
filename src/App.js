import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar'
import Languages from './components/Languages'
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <Navbar />
        <Languages />
    </div>
  );
}

export default App;