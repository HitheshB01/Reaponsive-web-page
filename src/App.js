import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Footer/>
    </div>
  );
};

export default App;
