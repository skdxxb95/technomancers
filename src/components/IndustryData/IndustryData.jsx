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
          Occaecati nulla molestias voluptas nostrum facilis est deserunt. Placeat pariatur sint natus ab. Ipsam est repellendus maiores quod. Aut perferendis laborum aut.
          <br></br>
          Ut adipisci quas ut esse. Aliquid sit ab beatae sed. Dignissimos sunt tempore recusandae earum omnis. Et animi autem velit culpa reprehenderit voluptatum. Et aut natus exercitationem qui. Velit molestias reprehenderit quo et repudiandae.
          <br></br>
          Placeat ipsa voluptas minima in laudantium doloribus et. Quasi iusto nisi accusantium amet reprehenderit. Voluptas dolorem repellat debitis ut voluptatem dolores. Maxime amet est eum quis itaque quibusdam eos. Deserunt nemo unde facere fuga enim minima repellat nihil.
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