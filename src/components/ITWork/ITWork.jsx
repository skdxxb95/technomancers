import React from 'react'
import './itwork.css'

const ITWork = () => {
  return (
    <section id='itwork'>
      <div className='itwork'>
        <div className="itwork-content">
          <h1>IT Work</h1>
          <h5>From the perspective of an IT professional.</h5>
          {/*------ THIS IS WHERE YOU ENTER CONTENT ------*/}
          {/*------ THIS IS WHERE YOU ENTER CONTENT ------*/}
          {/*------ THIS IS WHERE YOU ENTER CONTENT ------*/}
          
           <h1 align = "center"> Transcript of Interview Between</h1>
           <h1 align= "center"> IT Specialist David Goh</h1>
           <h1  align= "center"> and </h1> 
           <h1 align="center">TechnoMancers TeamMembers</h1>
           <h1 align="center">Ally Harper and Samuel Bruce</h1>
                      
<br></br>


<p>00:08</p>
<br></br>
<p> AH: Good evening David and thank you for agreeing to do this interview with me this evening. How has your day been? </p> 
<br></br>                                      
<p>00:17</p>
<br></br>
<p> DG: Pretty good.</p>
<br></br>
<p>00:36</p>
<br></br>
<p>AH: We have a number of questions for you. Let’s get straight into it. This is part of our IT studies, Introduction to IT that myself and my team are doing. If you could please tell me about your IT work, what exactly you do, in what industry and do you do anything other than IT?</p>
<br></br>
<p>01:24</p>
<br></br>
<p>DG: I am what you call now a UNIX devOps specialist that means I am working with UNIX stuff and I do both programming and systems administration combined. I do quite a lot of cloud enabled services. Do I do anything other than IT? Not really, no.</p>
<br></br>
<p>02:17</p>
<br></br>
<p>AH: No, I thought not when I saw your webpage, that’s enough to keep you busy. So, what first interested you in a career in IT?</p>
<br></br>
<p>02:22</p>
<br></br>
<p>DG: I guess I started programming when I was 8 on my Dad’s Commodore 64 so I’ve been doing it ever since then really. So, I eventually did a little bit of university, didn’t do very well at that cos I spent all my time programming instead and then jumped right in and running computers basically.</p>
<br></br>
<p>03:00</p>
<br></br>
<p>AH: Fabulous. So, do you work independently or as part of a team?</p>
<br></br>
<p>03:07</p>
<br></br>
<p>DG: I’ve done lots of different stuff over the years. At the moment I am the sole developer at a data intelligence services company so that’s just me right now. I have worked in teams ranging from 50 plus people to 3 or 4.</p>
<br></br>
<p>03:45</p>
<br></br>
<p>AH: Do you work from home or in an office?</p>
<br></br>
<p>03:49</p>
<br></br>
<p>DG: Both. Even prior to the pandemic I was generally doing three days at home and two in the office anyway. Realistically there’s no reason why most of my work can’t be done by video chat and most of it is running on computers that I can access remotely anyway. I’m never sitting in front of a computer anyway; they are in the data centre or sitting in the cloud. So what I’m working at is not dependant on where I am as long as I have internet connection and network setup its all good.</p>
<br></br>
<p>04:41</p>
<br></br>
<p> AH: Yeah, we’ve been learning a little bit about the cloud. So who else do you interact with at work? Other IT professionals, clients, investors?  </p><br></br>
<p>05:17</p>
<br></br>
<p>DG: Yes, the company I work for at the moment is what you’d call data intelligence services so they provide camera services, drain sensors, bin sensors and particularly camera feeds. They do the camera feeds for Melbourne water, including some clever stuff like being able to point the camera at something and being able to say where is that plume of smoke coming from? [potential bushfire in water catchment area] which would be quite important coming up with the fire season approaching so that’s the sort of we do. I work with my bosses, CEO and chief operating  officer and sometimes I have external contractors that do certain parts of projects so I interact with them too. </p>
<br></br>
<p>07:20</p>
<br></br>
<p>AH: What aspects of your work do you spend the most time on?</p>
<br></br>
<p>07:27</p>
<br></br>
<p>DG: My time is spent simply doing coding of various kinds ranging from the actual development of a new bookwork or new product features or whatever to nowadays a lot of systems administration is done by what we call the “Infrastructure as code”, so we actually  don’t employ a server, we actually write a bunch of stuff which deploys a server automatically for us so then we can repeatably employ a server in the same way. This is particularly important if we want to scale out a service and have ten copies of the same server. And have it doing all sorts of complicated work in parallel and then apart from that there is also test code and monitoring code so there’s code that tests the other code that we write. So you write a feature and then you write some code that tests that the feature  actually works so that you know that’s its actually working. That’s most of my day to day is writing either feature code or test code for infrastructure.</p>
<br></br>
<p>08:57</p>
<br></br>
<p>AH: Samuel, Do you have any questions in regards to that?</p>
<br></br>
<p>09:07</p>
<br></br>
<p>SB: Do you find it quite time consuming writing testing code, I personally work in IT at the moment myself and my boss is doing the development and he spends most of his time talking about the testing code rather than the actual software itself. </p>
<br></br>
<p>9:19</p>
<br></br>
<p>DG: Aha, yeah, testing is a good, it takes me nearly the same amount of time to write the test code as it does to write the original code. And to de-bug it. The de-bugging that test code cycle kind of interacts with the de-bugging cycle, so you write the code and then you roll out some tests and you try it out and if it works first time you’re like Ahhh I know there’s something wrong! Cos that almost never happens. When it does you freak out that you’ve done something weird. You freak out that the tests are broken! So I do spend a lot of time in the testing and de-bug cycle and then there’s more when you get other humans involved, you deploy the feature in the development system or a test system and other people will get it and go hang on that’s not quite working right, it needs to be a bit more like this or I just need that to move to the left a bit.</p>
<br></br>
<p>10:39</p>
<p>AH: How do you keep up to date on the latest technologies and trends in the industry?</p>
<br></br>
<p>10:46</p>
<br></br>
<p>DG: [Laughing] There’s this famous quote from Alice Through The Looking Glass, the Red Queen says to Alice “You have to run very fast just to stay on the spot” and that is the world of IT and programming and all IT is like that. I’ve been around long enough, when did I start this career? Yeah, nearly 30 years ago, so I’ve seen a lot of, there’s a lot of layers of development that have cropped up over the time, there’s a lot a of repetition in that, ultimately most programming languages are the same its just that’s there’s a different tool box or a different libraries available for use so its sort of a matter of shifting to new technologies when the time is right and it depends on what kind of jobs your doing when that’s appropriate some industries are quicker to jump on new programming languages than others from where I sit is a little more not on the leading edge but behind the leading edge. Once a programme starts getting popular I look at it so I start looking at that. I aim to and always have gone direct to source documentation for stuff cos that works better for the breadth of stuff that I do because I am what they call a full-stack developer arranging that and a bit further because I do DevOps. As well I start all the way from the ground of the system all the way to the stuff on the front end that the user interacts with. You can’t possibly remember all of it so its really important to be able to look up the documentation for the system or the libraries and languages that you are using so you can go “ok so how am I supposed to do this particular bit?” And so being able to look that up and do that research as you go is really critical, often I specifically search places like Stack Exchange or  Unix exchange? There’s a whole lot of forums that cover specific technologies that exist that you can jump into and search for questions there’s a little bit of skill required in interpreting all of the answers in this quarter so tricky. I guess I and other IT professionals from previous workplaces query each other on social media feeds to so we talk about what’s going on in our jobs, that’s how we keep up with each other. Ah, and I have a subscription to Ars Technica which is a technology focused journal, internet news site I guess.</p>
<br></br> 
<p>14:56</p>
<br></br>
<p>AH: I don’t know how you remember half the stuff you remember so…</p>
<br></br>
<p>15:00</p>
<br></br>
<p> 
DG: You got to remember how to find it. Remember how to search for it and find it. That’s the real trick. You can’t possibly remember it all. I do remember a lot but I look up everything all the time. </p>
<br></br>
<p>15:16</p>
<br></br>
<p>SB: Using a lot of resources to piece things together and get there in the end. Just remembering where to grab things compare to rather just knowing everything.</p>
<br></br> 
<p>15:25</p>
<br></br>
<p>DG: Yep, you have to be able to do that. That’s just how it is, you can’t remember it all. And it changes, it changes day to day. The version you’re running today of a piece of software, the same feature will be different tomorrow. It’s not that it stays the same, stuff changes you just have to look it up every time cos its different.</p>
<br></br> 
<p>16:40</p>
<br></br>
<p>AH: Can you provide an example of past projects or tasks that you have worked on?</p> 
<br></br>
<p>16:45</p>
<br></br>
<p>DG: My first job was working on a train control system. That was pretty large, that was 30 years ago working for state rail, NSW. Basically kept track of all the trains, signals, where they moved that sort of thing, that’s a project across a lot of stuff on that. More recently I’m building up a network camera solution for a global company Axis that do a lot of cameras and devices and that sort of thing and there’s some networking features in there where the camera will connect to a cloud service that we run and we collect videos off it and store them in the cloud so that customers can have a have look at them without having to, they can get them easily from a mobile friendly base. I used to work for AAPT and I was running their monitoring systems I’d be able to talk to hundreds of unix servers in various places, Check that they were all running properly, and running services that they were supposed to, maybe even intervene if things were going a bit funny. So yeah, that’s about it, a few snapshots of different things I’ve done.</p>
<br></br>
<p>18:55</p>
<br></br>
<p>AH: So, how do you prioritise your workload and manage your time effectively?</p>
<br></br>
<p>19:02</p>
<br></br>
<p>DG: I generally, if we haven’t got one I put one in, but usually I just have some sort of task tracking system where there’s tickets that come in and you can allocate them to individuals, you know, features like you can make this particular picture or manage this particular function. It’s a matter of consultation with the team or team leader or whoever you like about what the priorities on these tickets that exist are. There’s a lot of stuff knocking around at the moment in the industry generally about Agile Methodology, in the end its another project managers methodology, you’ve got big blocks of time and you’re trying to slot things in within those blocks of time. Development used to a bit of a big bang what they call Waterfall Project Methodology where you do a whole bunch of development work for months or years and then deploy it all at the end but things don’t work that way anymore. You build a small thing and deploy it as fast as you can and get it out there, sometimes you have to take the time to fix some of the stuff behind the scenes and then deploy that and hope nothing breaks so there’s some of the cycle of develop, test, release, develop, test, release, and then what you do is put in features that are, depends on the business you’re working in, depends on who’s running the project, you know I’ve worked as at external consultant in which case its whoever is running our workload will say you do this, you do this ticket. So its really up to whoever’s managing me to allocate the work and my job on the other side of that is to advise essentially how long I think things will take, so this feature, we need it to do this, well that’s going to take six months or it might be two hours and then they need to weigh up, ok, well if that’s going to take six months then maybe we won’t do that at all or maybe we’ll do this thing that’s going to take two hours or we’ll do this other thing that’s more important it’ll take three weeks and that’s up to generally from where I tend to sit its up to the business to set the priorities and the goals and then I will work with it.</p>
<br></br> 
<p>23:11</p>
<br></br>
<p>AH: How do you handle difficult or frustrating things that may arise?</p>
<br></br>
<p>23:22</p>
<br></br>
<p>DG: For me there’s a lot of venting to colleagues, sometimes outside the workspace as well, just to be able to have a laugh and get on with the job. Different people handle it differently, I tend to try to narrow things down to what we are trying to achieve, if necessary bring in appropriate management levels, depending on the organization. </p>
<br></br>
<p>24:30</p>
<br></br>
<p>AH: What do you find most challenging about your position?</p>
<br></br>
<p>24:35</p>
<p>DG: I think sometimes trying to figure out what the real priorities are, that’s not always easy, and sometimes the non-technical people don’t know they want and what’s possible so there’s always a challenge in articulating and riding the line between educating and saying this is what is possible and this is what isn’t possible this is how long the different options are going to take. That is the trickiest part of the job communicating to non-technical the complexity behind what it is you’re doing and working it all out.</p>
<br></br>
<p>25:56</p>
<br></br>
<p>AH: If there is one thing that would make your job easier, including equipment, software, office design, furniture or the atmosphere what would it be?</p>
<br></br>
<p>26:12</p>
<br></br>
<p>DG: Faster laptop, [Chuckle] Better online collaboration? That is not always done well, in different organisations, that’s pretty common, is that the online collab tool set is not always amazing.</p>
<br></br>
<p> 27:14</p>
<br></br>
<p>AH: What do you enjoy most about your work as an IT professional?</p>
<br></br>
<p>27:22</p>
<br></br>
<p>DG: Well I really like delivering new stuff, its really nice to build some new things that people like and have them delivered and they use it. That’s the fun part. It’s a little bit of a weird angle on things but in a funny way as a programmer it’s the closest you’ll get to being a sort of fantasy world wizard. You get to write weird arcane programs in languages that nobody else understands and you make things happen! Computers sit up and do things they make other people do things with with the thing that you wrote, It’s weird because its mostly not tangible but yet it kind of is because every website you see every app you play with somebody wrote that, somebody made that happen and that’s me in my little corner, I make things happen that didn’t exist before. So that’s kinda cool.</p>
<br></br>
<p>28:40</p>
<br></br>
<p>AH: Yeah, its amazing, isn’t it? I was amazed at myself creating a website, I’ll send you a link. Its pretty basic. </p>
<br></br>
<p>28:55</p>
<br></br>
<p>DG: Yeah, but that’s the thing, it didn’t exist before! You made it! Like that’s cool!</p>
<br></br>
<p>29:01</p>
<br></br>
<p>SB: It kinda hard not to sit there and stare at what you’ve done for ages sometimes.</p>
<br></br>
<p>29:05</p>
<br></br>
<p> DG: Yeah and go Hey that’s cool, I just made something happen and something other people can look at and go Ahh that’s cool.</p>
<br></br>
<p>29:17</p>
<br></br>
<p>AH: Just a couple more and these are both pretty sweet questions. Is there anything about the IT profession that you wished the general public understood better?</p>
<br></br>
<p>29:30 [Chuckle] I think, it’s a weird one where I think the general public doesn’t understand the complexities of what’s going on. Right? I could spend probably several hundred hours talking through everything that’s involved in delivering a webpage to a user on their smartphone and every device involved in that I can probably articulate it ranging from the servers involved in how you get from the name? to the internet connection to the servers that are delivering the content to the networking devices that are actually channelling all of that to the smartphone itself having a million devices on it but inside the smartphone that are displaying the thing you’re looking at and there is so much there that is just completely invisible to the general public, behind that webpage, that simple webpage apparently, are thousands of devices that have been talked to just to get that one webpage to you and you look at that on your smartphone and you go Oh yeah, I’ve looked up on the internet and there are thousands of devices that have delivered that thing to you and nobody knows that its invisible so I guess in a way I would like the general public to understand that there is that level of complexity but its also crazy, its mad.</p>
<br></br> 
<p>31:42</p>
<br></br>
<p>AH: Can you please share an example of what you do that best captures the essence of the IT industry?</p>
<br></br>
<p>31:52</p>
<p>DG: I really think that the core of the IT industry is making computers work for people. I think about 70% of the IT industry doesn’t understand that part. That the whole point of the game is to make computers do things for people there’s no point to it otherwise we don’t make  computers do things for computers that doesn’t help anyone that doesn’t do anything the whole point is to make things better for people so I guess the aspect of my work that I like the best is the fact that I as a particularly skilled professional my job is to talk to the people who want stuff done and to translate that from what they want into the code and the infrastructure and the testing and the all of that stuff that goes behind making stuff happen that is what I do and that is the magic, that translation between I have an idea and I want the computer to help me do this and then my job is to make that happen, that’s what I love about it that’s the best part of the whole job, that I can do that, I can go yeah, I delivered the thing you want. </p>
<br></br>
<p>33:26</p>
<br></br>
<p>AH: Fabulous! Thank you so much for giving us your time tonight with this interview, we have gone a little bit over time so I do apologise. </p>
<br></br>
<p>33:34</p>
<br></br>
<p>SB:Yeah, thank you David.</p>
<br></br>
<p>33:37</p>
<br></br>
<p> AH:It was wonderful to meet you. </p>
<br></br>
<p>33:39</p> 
<br></br>
<p> SB:Its been great listening. Thank you.</p>
<br></br>
<p>33:45</p>
<br></br>
<p> AH: I'll press end now on the recording........</p>
<br></br>
<br></br>
<p>We said our farewells with the recording stopped.</p> 
<br></br><br></br>





          {/*------ THIS IS WHERE YOU STOP ------*/}
          {/*------ THIS IS WHERE YOU STOP ------*/}
          {/*------ THIS IS WHERE YOU STOP ------*/}
        </div>
      </div>
    </section>
  )
}

export default ITWork