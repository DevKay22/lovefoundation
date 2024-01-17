import React from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import Know from '../Components/Know';
import Services from '../Components/Services';
import Projects from '../Components/Projects';
import Spend from '../Components/Spend';

const Home = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Know />
        <Services />
        <Projects />
        <Spend />
        

    </div>
  )
}

export default Home