import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Features from './components/Features';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <hr/>
      <MainSection />
      <Features />
    </div>
  );
}

export default App;
