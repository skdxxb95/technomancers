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
          We have listed each of the Technomancer’s Ideal jobs and ordered them in terms of no. employed as listed on the website <a href='https://labourmarketinsights.gov.au/'>Labour Market Insights</a> (which will soon be archived and replaced with <a href="jobsandskills.gov.au">Jobsandskills.gov.au</a>). The list has been made this way as most of the ideal jobs are not listed in any of the other data or information that we had available.<br></br><br></br><br></br>
Sarah - ICT Project Manager (Digital Healthcare). (Australian Government - Jobs and Skills, 2022) (Australian Government, 2021)<br></br><br></br>
Sam K - Business Improvement Specialist (Specialisation of Management Consultant). (Australian Government - Jobs and Skills, 2022) (Australian Government - Labour Market Insights, 2023)<br></br><br></br>
Brodie - Senior .NET Developer (Specialisation of Developer Programmer). (Australian Government - Jobs and Skills, 2022) (Australian Government, 2021)<br></br><br></br>
Sam B- Full Stack Developer (Specialisation of Developer Programmer). (Australian Government - Jobs and Skills, 2022) (Australian Government, 2021)<br></br><br></br>
Ally - ICT Business/Systems Analyst. (Australian Government - Jobs and Skills, 2022) (Australian Government, 2021)<br></br><br></br>
Damian - Cyber Security Analyst. (Specialisation of ICT Security) (Australian Government - Jobs and Skills, 2022) (Australian Government, 2021)<br></br><br></br>

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
          The skills listed below are the rankings for the IT-Specific skills as presented in the currently provided data, please note that this data is from four years ago and does not reflect current rankings. <br /><br />
          <ol>
            <li>SQL.</li>
            <li>Javascript.</li>
            <li>Java.</li>
            <li>Business Management.</li>
            <li>Project Management.</li>
            <li>Microsoft C#.</li>
            <li>Sotware Programming.</li>
            <li>.Net Programming.</li>
            <li>Oracle.</li>
            <li>ITIL.</li>
            <li>Python.</li>
            <li>Scrum.</li>
            <li>Business Processes.</li>
          </ol>
          <br />
          The next list could not be ranked from the data. And are not listed in any specific order.
          <br></br><br />
          <ol>
            <li>HL7.</li>
            <li>Rhapsodty.</li>
            <li>FHIR.</li>
            <li>Information Security.</li>
            <li>VB.NET.</li>
            <li>Microsoft Project.</li>
            <li>Project Server/Sharepoint.</li>
            <li>ITAM.</li>
            <li>Typescript.</li>
            <li>React.</li>
            <li>node.js.</li>
            <li>Dynamic 365.</li>
          </ol>
          <br /><br />
          </p>
          <br /><br />
          <p>
          Here we find the General Skills, which have been ranked in terms of demand from employers.
          <br /><br />
          <ol>
            <li>Communication.</li>
            <li>Problem Solving.</li>
            <li>Organizing and Managing Multiple Priorities/Prjoects.</li>
            <li>Writing.</li>
            <li>Ability to collaborate and work in a team environment.</li>            
            </ol>
            <br />
            This next set of General Skills were not available in the provided data and could not be ranked, they are not listed in any specific order.
            <ol>
            <br />
            <li>Interpersonal Skills.</li>
            <li>Time Management.</li>
            <li>Ability to meet deadlines.</li>
            <li>Negotiation.</li>
          </ol>
          <br></br>
          The three highest ranked IT-Specific skill that were not listed in out data set are listed below. All are useful to our Ideal Jobs but were not specifically listed in the job’s skill requirements.
          <ol>
            <li>Microsort Windows. </li>
            <li>SAP.</li>
            <li>Building Relationships.</li>            
          </ol>
          </p>
          <br /><br />
          <p>
            After carefully looking over and reviewing all the information and data provided to us from;<br />            
           <a href='https://rmit.instructure.com/courses/96273/files/27115682?wrap=1'>Australian Tech Future - Industry.gov.au</a><br />
           <a href=''>Skills Priority List June 2021</a><br />
           <a href=''>ACS Deloitte Australia's Digital Pulse</a><br />
           <a href=''>Labour Market Insights</a> (soon to be archived and replaced with) <a href='https://www.jobsandskills.gov.au/'>JobsandSkills.gov.au</a><br /><br />
           As well as the provided Burning Glass Data, we have been able to determine that as this data is currently 4 years out of date. It’s impact on career choice would be minimal and could only serve as an outline and guide for people to better understand the responsibilities and requirements of the job they are going for. We would need more up to date information in order for it to have a better or bigger impact on our choice. I will leave it up to each member of Technomancer’s to give you their personal feelings on the matter though. <br />
           <br />
           <b>Allyson:</b><br /><q>Possibly. My ideal job is one I can do remotely, but I am finding security and coding fascinating. I will reserve my decision until I have furthered my studies somewhat. The more I study the more interesting the whole gamut of IT becomes.</q><br /><br />
           <b>Brodie:</b><br /><q>I STILL NEED BRODIES ANSWER!!!!</q><br /><br />
           <b>Damian:</b><br /><q>After trawling through more webpages than I care to count and reading more in the last 2 weeks then I have in the last 2 years (and that is a lot) I am not going to change my opinion on my chosen ideal job. It has however presented several options and steppingstones to my ideal job. And Highlighted a few extra skills I should acquire on the journey.</q><br /><br />
           <b>Sam B:</b><br /><q>As someone who has recently completed their studies in cybersecurity, I have made the decision to further my education and skills in software development by enrolling in a Bachelor of IT program at RMIT. Both fields have always interested me, and I believe that combining my knowledge and skills in both areas will make me a valuable asset in the workforce. After researching data from Burning Glass, I am even more certain that pursuing a career in software development with a focus on cybersecurity is the right path for me. In today's workforce, it is crucial to have a diverse range of skills and knowledge, and I am confident that my background in cybersecurity and my interest in software development will make me an asset to any organization. To ensure that I am providing the best possible service to my future clients or employers, I am committed to continuing my education and staying up to date on the latest developments and trends in both fields.</q><br /><br />
           <b>Sam K:</b><br /><q>After looking into burning glass data, I can safely say that my ideal job will be remaining the same, as it is one that I hold close to my goals in life, while my ideal job has not changed, the option to further expand my knowledge in other areas has become apparent with the information provided about burning glass data. As stated above, any form of change to my ideal career path would be at most only very minor.</q><br /><br />
           <b>Sarah:</b><br /><q>My opinion of my ideal job has not changed. The role’s skill set will continue to grow into the future as a required and in demand role in any industry, not just health care. This information assisted in understanding the skill areas that I will need to expand on.</q><br /><br />
          </p>
          <br /><br />
          <p>
            <h3>Bibliography</h3>
            <br /><br />            
Australian Government - Jobs and Skills. 2022. Australian Skills Classification. Jobsandskills.gov.au. [Online] 2022. [Cited: 01 04, 2023.] https://www.jobsandskills.gov.au/australian-skills-classification#occupations~2611. ANZSCO 224711. —. 2022. <br /><br />
Australian Skills Classification. Jobsandskills.gov.au. [Online] 2022. [Cited: 01 04, 2023.] https://www.jobsandskills.gov.au/australian-skills-classification#occupations~1351. ANZSCO 1351.<br /><br />
Australian Government - Jobs and SKills. 2022. Australian Skills Classification. Jobs And Skills - Cyber Security Analyst. [Online] 2022. [Cited: 01 03, 2023.] https://www.jobsandskills.gov.au/australian-skills-classification#occupations~262116. ANZSCO 262116.<br /><br />
Australian Skills Classification. Jobsandskills.gov.au. [Online] 2022. [Cited: 01 04, 2023.] https://www.jobsandskills.gov.au/australian-skills-classification#occupations~261312. ANZSCO 261312.<br /><br />
Australian Skills Classification. Jobs and SKills.gov.au. [Online] 2022. [Cited: 01 04, 2023.] https://www.jobsandskills.gov.au/australian-skills-classification#occupations~2611. ANZSCO 2611.<br /><br />
Australian Government. 2021. Developer Programmers. Labour Market Insights. [Online] 09 10, 2021. [Cited: 01 15, 2023.] https://labourmarketinsights.gov.au/occupation-profile/developer-programmers?occupationCode=261312. 261312.<br /><br />
ICT Business Analysts. Labour Market Insights. [Online] 09 10, 2021. [Cited: 01 15, 2023.] https://labourmarketinsights.gov.au/occupation-profile/business-analysts-ict?occupationCode=261111. 261111.<br /><br /> 
ICT Manager. Labour Market Inisghts. [Online] 09 10, 2021. [Cited: 01 15, 2023.] https://labourmarketinsights.gov.au/occupation-profile/ict-managers?occupationCode=1351. 1351.<br /><br />
ICT Security. Labour Market Insights. [Online] 09 10, 2021. [Cited: 01 15, 2023.] https://labourmarketinsights.gov.au/occupation-profile/ict-security-specialists?occupationCode=262112. 262112.<br /><br />
Australian pissatn. 2021. suckit. labour market insigfht. [Online] 09 10, 2021. [Cited: 01 15, 2023.] labourmarketinsights.com. 654324.<br /><br />
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