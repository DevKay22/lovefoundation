import React from 'react'
import KnowAbout from '../Components/KnowAbout'
import Mission from '../Components/Mission'
import Journey from '../Components/Journey'
import Meet from '../Components/Meet'
import Contribute from '../Components/Contribute'
import Events from '../Components/Events'
// import Support from '../Components/Support'

const About = () => {
  return (
    <div>
        <KnowAbout />
        <Mission />
        {/* <Support /> */}
        <Journey />
        <Meet />
        <Contribute />
        <Events />
    </div>
  )
}

export default About