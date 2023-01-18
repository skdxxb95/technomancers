import React from 'react'
import './industrydata.css'
import CHART1 from '../../assets/Chart 1.png'

const IndustryData = () => {
  return (
    <section id='industrydata'>
      <div className='industrydata'>
        <div className="industrydata-content">       
          <h1>Industry Data</h1>
          <h5>Here's our research.</h5>
          {/*------ THIS IS WHERE YOU ENTER CONTENT ------*/}
          {/*------ THIS IS WHERE YOU ENTER CONTENT ------*/}
          {/*------ THIS IS WHERE YOU ENTER CONTENT ------*/}
          <p>
          We have listed each of the Technomancer’s Ideal jobs and ordered them in terms of no. employed as listed on the website Labour Market Insights (which will soon be archived and replaced with jobsandskills.gov.au). The list has been made this way as most of the ideal jobs are not listed in any of the other data or information that we had available.<br></br><br></br><br></br>
Sarah - ICT Project Manager (Digital Healthcare) (Australian Government - Jobs and Skills, 2022) (Australian Government, 2021)<br></br><br></br>
Sam K - Business Improvement Specialist (Specialisation of Management Consultant) (Australian Government - Jobs and Skills, 2022) (Australian Government - Labour Market Insights, 2023)<br></br><br></br>
Brodie - Senior .NET Developer (Specialisation of Developer Programmer) (Australian Government - Jobs and Skills, 2022) (Australian Government, 2021)<br></br><br></br>
Sam B- Full Stack Developer (Specialisation of Developer Programmer) (Australian Government - Jobs and Skills, 2022) (Australian Government, 2021)<br></br><br></br>
Ally - ICT Business/Systems Analyst (Australian Government - Jobs and Skills, 2022) (Australian Government, 2021)<br></br><br></br>
Damian - Cyber Security Analyst (Specialisation of ICT Security) (Australian Government - Jobs and Skills, 2022) (Australian Government, 2021)<br></br><br></br>

          <br></br>
          </p>
          <br></br><br></br>
          <p>
          In the following chart you will find the skills most closely link with most if not all Technomancer’s Team member ideal jobs. <br></br>
          <img src={CHART1}></img>
        <br></br>
        Overall, the group's required skill set includes a mix of both General and IT-specific skills, reflecting the diverse responsibilities and requirements of the different ideal jobs. Some skills, such as communication and problem solving, are applicable to a wide range of jobs and not just the Ideal Jobs specifically, while others are more specific to certain roles or industries.
        <br></br><br></br>
        <u><b>General Skills:</b></u>
        <br></br>       
                <ul>     
                  <li>Communication</li>
                  <li>Problem Solving</li>
                  <li>Writing</li>
                  <li>Organizing andd Managing Multiple Priorities/Projects</li>
                  <li>Interpersonal Skills</li>
                  <li>Ability to collaborate and work in a team environment</li>
                  <li>Time Management and ability to meet deadlines</li>
                  <li>Negotiation</li>
                </ul><br></br>
         
          <b>IT-Specific Skills:</b>
          <ul>
            <li>Information Security</li>
            <li>Compliance Software development (frontend and backend languages, .NET framework, C# programming, F#, and VB.NET)</li>
            <li>IT project management (Scrum, Microsoft Project, and Project Server/SharePoint)</li>
            <li>Business analysis (MySQL, SQL server and Oracle)</li>
            <li>Business improvement processes (ITIL)</li>
            <li>Software asset management (ITAM, SAM)</li>
            <li>Coding, testing, and automation techniques (Java, Python)</li>
            <li>Familiarity with specific programming languages and libraries (JavaScript, TypeScript, React, Node.js, Java) </li>
            <li>Knowledge of healthcare data management standards (HL7, Rhapsody, FHIR)</li>
            <li>Experience interpreting licensing terms and conditions (ITAM)</li>
            <li>ITIL, ITAM, and/or SAM training/certification </li>          
          </ul>
          <br></br><br></br>
          </p>
          <br></br><br></br>
          <p>              
          The skills listed below are the rankings for the IT=Specific skills as presented in the currently provided data, please note that this data is from four years ago and does not reflect current rankings.
          <ol>
            <li>SQL</li>
            <li>Javascript</li>
            <li>Java</li>
            <li>Business Management</li>
            <li>Project Management</li>
            <li>Microsoft C#</li>
            <li>Sotware Programming</li>
            <li>.Net Programming</li>
            <li>Oracle</li>
            <li>ITIL</li>
            <li>Python</li>
            <li>Scrum</li>
            <li>Business Processes</li>
          </ol>
          <br />
          The skills listed below could not be ranked from the data.      
          <br></br><br />
          <ol>
            <li>HL7</li>
            <li>Rhapsodty</li>
            <li>FHIR</li>
            <li>Information Security</li>
            <li>VB.NET</li>
            <li>Microsoft Project</li>
            <li>Project Server/Sharepoint</li>
            <li>ITAM</li>
            <li>Typescript</li>
            <li>React</li>
            <li>node.js</li>
            <li>Dynamic 365</li>
          </ol>
          <br /><br />
          </p>
          <br /><br />
          <p>
          What we have listed below are the General Skill, which have been ranked in terms of demand from employers.
          <br /><br />
          <ol>
            <li>Communication</li>
            <li>Problem Solving</li>
            <li>Organizing and Managing Multiple Priorities/Prjoects</li>
            <li>Writing</li>
            <li>Ability to collaborate and work in a team environment</li>            
            </ol>
            <br />
            The following General Skills were not available in the provided data and could not be ranked, and are not listed in any specific order.
            <ol>
            <br />
            <li>Interpersonal Skills</li>
            <li>Time Management</li>
            <li>Ability to meet deadlines</li>
            <li>Negotiation</li>
          </ol>
          <br></br>
          The three highest ranked IT-Specific skill that were not listed in out data set are listed below. All are useful to our Ideal Jobs, but were not specifically listed in the job’s skill requirements.
          <ol>
            <li>Microsort Windows </li>
            <li>SAP</li>
            <li>Building Relationships</li>            
          </ol>
          </p>
          <br /><br />
          <p>
            
          </p>
          {/*------ THIS IS WHERE YOU STOP ------*/}
          {/*------ THIS IS WHERE YOU STOP ------*/}
          {/*------ THIS IS WHERE YOU STOP ------*/}
        </div>
      </div>
    </section>
  )
}

export default IndustryData