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
import Project2Giphy from './gif/project2.gif'
import project22 from './gif/project22.png'
import capstone from './gif/Capstone.gif'
import Capstone from './gif/Capstone.png'
import CapstoneDetail from './components/CapstoneDetail'


function App() {
  const [gradientOrAnimation, setGradientOrAnimation] = useState(true)
  const [visibleDetailCapstone, setVisibleDetailCapstone] = useState(false)
  const [visibleDetails3, setVisibleDetails3] = useState(false)
  const [visibleDetails2, setVisibleDetails2] = useState(false)


  const handClickGOrA = () => {
    setGradientOrAnimation(!gradientOrAnimation)
  }
  const handleClickCapstone = () => {
    setVisibleDetailCapstone(!visibleDetailCapstone)
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
            {/* <Spline scene="https://prod.spline.design/YzuLLwr1Dp3RmGw1/scene.splinecode"/> */}
            {/* <Spline scene="https://my.spline.design/gradient-ec5a516a7797a2defedc0d0ffeac09f2/"/> */}
            <iframe src='https://my.spline.design/gradient-ec5a516a7797a2defedc0d0ffeac09f2/' frameborder='0' width='100%' height='100%'></iframe>
          </div>
        </div>
      </div>

      <div class="right">
        <div class="inner">
          <h1 className='title'>Triet Truong - <br /> Software Engineer</h1>
          <p id='brand-statement'>I am a solutions-driven software engineer with a sharp, analytical mind who is highly motivated by challenge. My aptitude for digesting and implementing new technologies makes me both efficient when given a clear task, and exceptionally versatile when faced with ambiguity or road blocks.</p>
          <div className='second-main-part'>
            <h2 className='recent-work'>Recent work <span className='click-for-details'>(click for details)</span></h2>

            <div className='project3-div'>
              <div className='project3'>
                <img src={Capstone} alt="project3" className='project3-image' />
                <img src={capstone} alt="project3" className='project3-giphy' />
              </div>
              <div className='decoration-container'>
                <h2 className='project-title'>SEI1031_GRADUATES</h2>
                <p className='project-description'>SEI1031_GRADUATES is a chat app that allows SEI1031 cohort to keep in touch after graduation <span onClick={handleClickCapstone} className='additional-details'>{visibleDetailCapstone ? "Show Less" : "Show More"}</span>
                </p>
                {visibleDetailCapstone ? <CapstoneDetail /> : ""}
              </div>
              {/* {visibleDetails3 ? <Project3Details /> : ""} */}
            </div>

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
                <h2 className='project-title'>BREED_BEAUTY</h2>
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
                  <div className='sub-languages'>
                    <p class="animate-charcter">JavaScript</p>
                    <p class="animate-charcter">Python</p>
                    <p>Java</p>
                    <p>Pascal</p>
                    <p>HTML5</p>
                    <p>CSS3</p>
                  </div>
                </div>
                <div className='Libraries-and-Frameworks'>
                  <h4 id="libraries-h4">Libraries | Frameworks</h4>
                  <div className='sub-libraries-frameworks'>
                    <div className='lib-frame1'>
                      <p class="animate-charcter">React</p>
                      <p>Express</p>
                      <p>Node.js</p>
                      <p>Flask</p>
                      <p>Mongoose</p>
                      <p>Passport</p>
                    </div>
                    <div className='lib-frame2'>
                      <p class="animate-charcter">Django</p>
                      <p>Socket.io</p>
                      <p>JWT</p>
                      <p>Bootstrap</p>
                      <p>Flexbox</p>
                      <p>Sass</p>
                    </div>
                  </div>
                </div>

                <div className='DataBase'>
                  <h4>Database</h4>
                  <div className='sub-database'>
                    <p class="animate-charcter">MongoDB</p>
                    <p>PostgreSQL</p>
                    <p>MySQL</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className='methology'>Methologies</h2>
            <p className='methology-content'>Object Oriented Programming | Responsive Design | Authentication (JWT) | CRUD Operations | RESTful Routing | Test-Driven Development</p>
            <div className='get-in-touch'>
              <h2 className='contact'>Get in touch</h2>
              <p className='methology-content'>Please do not hesitate to reach out.</p>
              <div className='social-media-list'>
                <a href="https://www.linkedin.com/in/swi-triettruong" className='LinkedIn' target="_blank">{<AiFillLinkedin className='LinkedIn-image' />}</a>
                <a href="https://github.com/Chrisstruong" className='GitHub LinkedIn' target="_blank">{<AiFillGithub className='GitHub LinkedIn-image' />}</a>
                <a href="https://docs.google.com/document/d/1Oi_YwtveNt5_83QAcfDuzq-cNprtO5hrHK6VwlgJA2c/edit?usp=sharing" className='Document LinkedIn' target="_blank">{<HiOutlineDocument className='Document LinkedIn-image' />}</a>
                <a href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=Triet.truongse@gmail.com&hl=en-US" className='Email LinkedIn' target="_blank">{<HiOutlineMail className='Email LinkedIn-image' />}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

export default App;
