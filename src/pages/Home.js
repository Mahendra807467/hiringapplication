import React, { useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Button from '../components/Button';
import useAnimate from '../hooks/useAnimate';
import '../styles/Home.css';

const Home = () => {
  const cardRef = useRef();
  const isVisible = useAnimate(cardRef);

  return (
    <div>
      <Header />
      <main>
        <section className="hero">
          <h1>Welcome to Figma Replica</h1>
          <Button label="Get Started" />
        </section>
        <section ref={cardRef} className={isVisible ? 'fade-in' : ''}>
          <Card title="Sample Card" description="This is a sample card content." />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;