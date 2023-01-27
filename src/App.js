import logo from './logo.svg';
import './style.css';
import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import Project3Details from './components/Project3Details';
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineDocument } from "react-icons/hi2";
import Project3Giphy from './gif/Project3Giphy.gif'
import Project3Image from './gif/Project3Image.png'
import Project2Details from './components/Project2Details';
import Project2Image from './gif/project2.png'
import Project2Giphy from './gif/project2.gif'
import project22 from './gif/project22.png'
import ReactPlayer from 'react-player';
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { Switch, Space } from "antd"
import gradient from './gif/gradients.gif'

function App() {
  const [gradientOrAnimation, setGradientOrAnimation] = useState(true)
  const [visibleDetails3, setVisibleDetails3] = useState(false)
  const [visibleDetails2, setVisibleDetails2] = useState(false)

  const handClickGOrA = () => {
    setGradientOrAnimation(!gradientOrAnimation)
  }
  const handleClick3 = () => {
    setVisibleDetails3(!visibleDetails3)
  }
  const handleClick2 = () => {
    setVisibleDetails2(!visibleDetails2)
  }



  return (
    <section>
      <div class="left">
        <div class="inner sticky">
          <div className="spline-image">
            <Spline scene="https://prod.spline.design/YzuLLwr1Dp3RmGw1/scene.splinecode" />
            {/* {gradientOrAnimation ? <Spline scene="https://prod.spline.design/YzuLLwr1Dp3RmGw1/scene.splinecode" />
: <Spline scene="https://prod.spline.design/15qcazqJfYoVXrms/scene.splinecode" />} */}

            {/* <div className='form-box'>
            <div className='button-box'>
              <Switch 
              onClick = {handClickGOrA}
              defaultChecked="true"
              checkedChildren="3D"
              unCheckedChildren="2D" />
            </div>

            </div> */}
          </div>
        </div>
      </div>

      <div class="right">
        <div class="inner">
          <h1 className='title'>Full-Stack Developer</h1>
          <p id='brand-statement'>My name is Triet Truong. I have been passionate about coding since I studied Pascal in grade 8th. Then I took computer science grade 11th and 12th classes at high school in Toronto, Canada. My performance at school went well so that I was honored to receive chemical engineering offer from University of Waterloo. Because I had to immigrate to the U.S.A in September, 2022 with my family, I could not have gone there to study. Problem-solving and logic of coding thrills me to explore more about the world of coding. </p>
          <div className='second-main-part'>
            <h2 className='recent-work'>Recent work <span className='click-for-details'>(click for details)</span></h2>

            <div className='project3-div'>
              <div className='project3'>
                <img src={Project3Image} alt="project3" className='project3-image' />
                <img src={Project3Giphy} alt="project3" className='project3-giphy' />
              </div>
              <div className='decoration-container'>
                <h2 className='project-title'>MOVIEBUFF</h2>
                <p className='project-description'>MovieBuff is a web app that allows users to rate and review the most action-packed and sweaty movies from the 80's and 90's <span onClick={handleClick3} className='additional-details'>{visibleDetails3 ? "Show Less" : "Show More"}</span>
                </p>
                {visibleDetails3 ? <Project3Details /> : ""}
              </div>
              {/* {visibleDetails3 ? <Project3Details /> : ""} */}
            </div>

            <div className='project3-div'>
              <div className='project3'>
                <img src={project22} alt="project3" className='project3-image' />
                <img src={Project2Giphy} alt="project3" className='project3-giphy' />
              </div>
              <div className='decoration-container'>
                <h2 className='project-title'>BREEDBEAUTY</h2>
                <p className='project-description'>Sometimes people just want to see photos of cute dogs. Zach and Triet app's mission is to solve the problem of by allowing the user to randomly generate a photo of a dog from a group of over 1000 dog photos.<span onClick={handleClick2} className='additional-details'>{visibleDetails2 ? "Show Less" : "Show More"}</span>
                </p>
                {visibleDetails2 ? <Project2Details /> : ""}
              </div>
              {/* {visibleDetails3 ? <Project3Details /> : ""} */}
            </div>

            <div className='hard-skills'>
              <h2 className='hard-skill-title'>Hard skills</h2>
              <div className='hard-skills-content'>
                <div className="languages">
                  <h4>Languages</h4>
                  <p>JavaScript</p>
                  <p>Python</p>
                  <p>Java</p>
                  <p>Pascal</p>
                  <p>HTML</p>
                </div>
                <div className='Libraries-and-Frameworks'>
                  <h4>Libraries | Frameworks</h4>
                  <p>React</p>
                  <p>Express</p>
                  <p>Flask</p>
                  <p>Django</p>
                  <p>Bulma</p>
                  <p>Bootstrap</p>
                </div>
                <div className='DataBase'>
                  <h4>Database</h4>
                  <p>MongoDB</p>
                  <p>Mongoose</p>
                </div>
              </div>
            </div>

            <h2 className='methology'>Methologies</h2>
            <p className='methology-content'>Agile / Scrum | Object Oriented Programming | MVC Pattern | Test-Driven Development | Responsive Design | Authentication (OAuth/Sesssions/Tokens) | CRUD Operations | RESTful Routing</p>
            <div className='get-in-touch'>
              <h2 className='contact'>Get in touch</h2>
              <p className='methology-content'>Please do not hesitate to reach out.</p>
              <div className='social-media-list'>
                <a href="https://www.linkedin.com/in/swi-triettruong" className='LinkedIn'>{<AiFillLinkedin className='LinkedIn-image' />}</a>
                <a href="https://github.com/Chrisstruong" className='GitHub LinkedIn'>{<AiFillGithub className='GitHub LinkedIn-image' />}</a>
                <a href="https://docs.google.com/document/d/1Oi_YwtveNt5_83QAcfDuzq-cNprtO5hrHK6VwlgJA2c/edit" className='Document LinkedIn'>{<HiOutlineDocument className='Document LinkedIn-image' />}</a>
                <a href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=Triet.truongse@gmail.com&hl=en-US" className='Email LinkedIn'>{<HiOutlineMail className='Email LinkedIn-image' />}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

export default App;
