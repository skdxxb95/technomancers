import React from 'react'
import Home from './components/Home/Home'
import TeamProfile from './components/TeamProfile/TeamProfile'
import IndustryData from './components/IndustryData/IndustryData'
import './index.css'
import ITWork from './components/ITWork/ITWork'
import ITTechnologies from './components/ITTechnologies/ITTechnologies'
import ProjectIdea from './components/ProjectIdea/ProjectIdea'
import Navbar from './components/Navbar/Navbar'
import { HashRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className="container">
      <>
        <Navbar/>
      </>
      <HashRouter>
        <Routes>
          <Route exact path ="/technomancers" element={<Home />}></Route>
          <Route path ="/technomancers/teamprofile" element={<TeamProfile />}></Route>
          <Route path ="/technomancers/industrydata" element={<IndustryData />}></Route>
          <Route path ="/technomancers/itwork" element={<ITWork />}></Route>
          <Route path ="/technomancers/ittechnologies" element={<ITTechnologies />}></Route>
          <Route path ="/technomancers/projectidea" element={<ProjectIdea />}></Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App