import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar'
import Languages from './components/Languages'
import Projects from './components/Projects'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <Navbar />
        <Projects />
        <Languages />
        <Footer />
    </div>
  );
}

export default App;