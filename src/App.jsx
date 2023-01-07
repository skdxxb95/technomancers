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
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break
    case "/teamprofile":
      Component = TeamProfile
      break
    case "/industrydata":
      Component = IndustryData
      break
    case "/itwork":
      Component = ITWork
      break
    case "/ittechnologies":
      Component = ITTechnologies
      break
    case "/projectidea":
      Component = ProjectIdea
      break  
  }
  return (
  <>
    <Navbar />
    <Component />
  </>
  )
}

export default App