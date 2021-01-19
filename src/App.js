import React, { useState } from 'react';
import './App.scss';
import { Navbar } from './components/navBar/navbar';
import { SkillsIcon } from './components/skills';
import { MyProject } from './components/projects/myProject';
import MetaTags from 'react-meta-tags';


import { PostInstagram } from './components/post/post';
import {BrowserRouter as Router } from 'react-router-dom'
import MenuLogo from './assets/svg/menu.svg'
import { motion } from 'framer-motion'
import myResume from './assets/resume.pdf'
import { mySkills } from './data/skills'
import { myProjects } from './data/projects';
import { myPosts } from './data/posts';





function App() {

    const [withMenu, setWithMenu] = useState(false);

    return (
      <Router>
        <MetaTags>
            <title>Med Iheb Hichri</title>
            <meta id="meta-description" name="description" content="I am Mohamed Iheb Hichri , I am front end developer and I love what I do and every day enjoy the learning process and I work for a lot of technologies like ReactJs and a lot of technologies of the front end I am a Business Computing student and with my school, I try to learn new things about programming every day without stopping " />
            <meta id="og-title" property="og:title" content="Mohamed Iheb Hichri" />
            <meta id="og-image" property="og:image" content="./assets/banelCover.png" />
        </MetaTags>
        <div className='body-container' >
            <Navbar 
                withMenu={withMenu}
                setWithMenu={setWithMenu}
            />
            <div className='container-all-pages' onClick={() => withMenu === true ? setWithMenu(false) : null} >
                <div className='wrapper-menu-mobile' onClick={() => setWithMenu(true)}>
                    <img alt='menu'  src={MenuLogo}/>
                </div>
                
                <div className='title-page' >
                    <motion.h1 initial={true} animate={{ x: 300}} className='my-name'>
                        HI , I'M MOHAMED IHEB HICHRI .
                    </motion.h1>
                    <motion.h2 initial={true} animate={{ x: -300}} className='surname-page'>
                        I'M A FRONT END DEVELOPER AND REACT DEVELOPER .
                    </motion.h2>
                </div>
                <div className="information-about-me" id='aboutMe'>
                    <div className='container-information'>
                        <div className='my-image'/>
                        <div className='about-me'>
                            <h3 className='aboutMe-text'>
                                About Me
                            </h3>
                            <div className='text'>
                                I 'm a front end developer and I genuinely  love what i do, I'm always trying to learn new thing and discover new technologies  And hey ! I forgot to mention that I'm a Business computing student!  <pre /> 
                                I can work with different technologies like ReactJs, and others related to frontend development.
                            </div>
                            <div className='button-github'>
                                <a href={myResume} download >
                                    Download My Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='skills' className='container-my-skills'>
                    <h1 className='aboutMe-text'>
                        My Skills
                    </h1>
                    <div className='wrapper-my-skills'>
                        {mySkills.map(({id, ...otherProps}) => (
                            <SkillsIcon 
                                key={id}
                                {...otherProps}
                            />
                        ))}
                    </div>
                </div>
                <div id='projects' className='container-my-projects'>
                    <span
                        className='my-projects'
                    >
                        My Projects
                    </span>
                    <div className='projects-wrapper'>
                        {myProjects.map(({id, ...otherProps}) => (
                            <MyProject 
                                key={id}
                                {...otherProps}
                            />
                        ))}
                    </div>
                </div>
                <div  className='content-creator'>
                    <h1 className='content-title'>
                        Some Content Creation
                    </h1>
                    <div className='wrapper-my-content'>
                        {myPosts.map(({...otherProps}) => (
                            <PostInstagram 
                                {...otherProps}
                            />
                        ))}
                    </div>
                </div>
                <div id='contact' className='footer-container'>
                    <div className='wrapper-footer'>
                            <div className='top-div'>
                                <h1 className='title-footer'>
                                    WANNA CHAT?
                                </h1>
                                <span className='text-footer'>
                                    Although I’m  taking on new projects at the moment, you’re more than welcome to say a big hello via email at <a target='_blank' rel='noopener noreferrer' href='mailto:ihebhichri12@gmail.com' className='link-work'>ihebhichri12@gmail.com</a> or feel free to drop me a line on <a target='_blank'  href='https://www.linkedin.com/in/mediheb20/'  rel='noopener noreferrer' className='link-work'>Linkedin</a>
                                </span>
                            </div>
                            <div className='bottom-div'>
                                <span className='userName'>
                                    © MedIheb20
                                </span>
                                <div className='icons-social-media'>
                                    <a target='_blank' rel='noopener noreferrer'  href='https://github.com/medIheb20' >
                                        <img alt='my-links' src= "https://img.icons8.com/doodle/48/000000/github--v1.png" />
                                    </a>
                                    <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/mediheb20/'>
                                        <img alt='my-links' src="https://img.icons8.com/dotty/80/000000/linkedin.png" />
                                    </a>
                                    <a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/mediheb20/'>
                                        <img alt='my-links' src="https://img.icons8.com/doodle/48/000000/instagram-new.png" />
                                    </a>
                                    <a target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/medIheb20/'>
                                        <img alt='my-links' src="https://img.icons8.com/carbon-copy/100/000000/facebook-new.png" />
                                    </a>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </Router>
  );
}

export default App;
