import React from 'react';

import Hero from '../Components/Hero';
import Know from '../Components/Know';
import Services from '../Components/Services';
import Projects from '../Components/Projects';
import Spend from '../Components/Spend';
import Contribute from '../Components/Contribute';
import Events from '../Components/Events';
// import Pract from '../Components/Pract'

const Home = () => {
  return (
    <div>
        
        <Hero />
        <Know />
        <Services />
        {/* <Pract /> */}
        <Projects />
        <Spend />
        <Contribute />
        <Events />
        
        

    </div>
  )
}

export default Home