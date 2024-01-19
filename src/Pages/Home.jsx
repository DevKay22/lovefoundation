import React from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import Know from '../Components/Know';
import Services from '../Components/Services';
import Projects from '../Components/Projects';
import Spend from '../Components/Spend';
import Contribute from '../Components/Contribute';
import Events from '../Components/Events';

const Home = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Know />
        <Services />
        <Projects />
        <Spend />
        <Contribute />
        <Events />
        

    </div>
  )
}

export default Home