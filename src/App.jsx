import React from 'react'
import Home from './components/Home/Home'
import TeamProfile from './components/TeamProfile/TeamProfile'
import IndustryData from './components/IndustryData/IndustryData'
import './index.css'
import ITWork from './components/ITWork/ITWork'
import ITTechnologies from './components/ITTechnologies/ITTechnologies'
import ProjectIdea from './components/ProjectIdea/ProjectIdea'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <TeamProfile />
      <IndustryData />
      <ITWork />
      <ITTechnologies />
      <ProjectIdea />
    </>
  )
}

export default App