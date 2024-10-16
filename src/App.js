import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './styles/golbal.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App