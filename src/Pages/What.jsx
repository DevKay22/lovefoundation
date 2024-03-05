import React from 'react'
import Contribute from '../Components/Contribute'
import Events from '../Components/Events'
import Working from '../Components/Working'
import Pract from '../Components/Pract'
import Projects from '../Components/Projects'

const What = () => {
  return (
    <div>
        <Working />
        <Pract />
        <Projects />
        <Contribute />
        <Events />
    </div>
  )
}

export default What