import React from 'react';
import './App.css';
import Hero from './components/hero/hero';
import Nav from './components/hero/nav';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;