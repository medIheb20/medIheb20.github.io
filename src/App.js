import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Navbar } from './components/navBar/navbar';
import { SkillsIcon } from './components/skills';
import { MyProject } from './components/projects/myProject';
import project1 from './assets/kprm.png';
import project2 from './assets/eatEasy.png';
import project3 from './assets/crwen-shop.png';
import post1 from './assets/post-1.jpg';
import post2 from './assets/post-2.jpg';
import post3 from './assets/post-3.jpg';
import post4 from './assets/post-4.jpg';

import { PostInstagram } from './components/post/post';
import {BrowserRouter as Router } from 'react-router-dom'
import MenuLogo from './assets/svg/menu.svg'
import { motion } from 'framer-motion'
import myResume from './assets/resume.pdf'



const mySkills = [
    {
        id : 1,
        iconSkill : "https://img.icons8.com/color/480/000000/javascript.png",
        nameSkill : "Javascript",
        colorCircle : "#80e5ff"
    },
    {
        id : 2,
        iconSkill : "https://img.icons8.com/bubbles/500/000000/react.png",
        nameSkill : "React",
        colorCircle : "#F9DBD2"
    },
    {
        id : 3,
        iconSkill : "https://img.icons8.com/color/480/000000/redux.png",
        nameSkill : "Redux JS",
        colorCircle : "yellow"
    },
    {
        id : 4,
        iconSkill : "https://img.icons8.com/color/480/000000/sass.png",
        nameSkill : "SCSS",
        colorCircle : "#b3edff"
    },
    {
        id : 5,
        iconSkill : "https://img.icons8.com/color/480/000000/firebase.png",
        nameSkill : "Firebase",
        colorCircle : "#e0ebeb"
    },
    {
        id : 6,
        iconSkill : "https://camo.githubusercontent.com/ce4f1c6975e96a597d4d535edfa0c66846f7fb5f77e13a5b2d528109fd6fc98d/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313533383336313039312f7265706f7369746f726965732f6e6578742d6a732f6e6578742d6a732e706e67",
        nameSkill : "Next JS",
        colorCircle : "#F9DBD2"
    },
    {
        id : 6,
        iconSkill : "https://img.icons8.com/color/144/000000/graphql.png",
        nameSkill : "GraphQL",
        colorCircle : "yellow"
    },
    {
        id : 7,
        iconSkill : "https://img.icons8.com/dusk/512/000000/css3.png",
        nameSkill : "CSS",
        colorCircle : "#F9DBD2"
    },
    {
        id : 8,
        iconSkill : "https://img.icons8.com/color/480/000000/html-5.png",
        nameSkill : "HTML",
        colorCircle : "#b3edff"
    },

]
const myProjects = [
    {
        id : 1,
        image : project1,
        title : 'Kprm Company',
        text : "It's a website informative for a company in south africa, it's the first real project for me .  I apply all my knowledge in Html and Css and Bootstrap in this project ",
        technolgieUsed: 'Javascript, Html, Css',
        projectLink : 'https://kprm.co.za/'
    },
    {
        id : 2,
        image : project2,
        title : 'Eat Easy App',
        text : 'a Food Delivery app, my first complex front end i did , I use all  what i learned for the single page application and to practice . For this project i use the firebse for the database and the backend',
        technolgieUsed: 'ReactJs, ReduxJs, Firebase, Styled-components',
        projectLink : 'https://github.com/medIheb20/EatEasy-Delivery-Food'
    },
    {
        id : 3,
        image : project3,
        title : 'Crwen Clothes Shop',
        text : "it's a project for what i learn from a course from udemy , It's a project totally built it front end with firebase for the backend",
        technolgieUsed: 'ReactJs, ReduxJs, Firebase, Sass',
        projectLink : 'https://crwn-live.herokuapp.com/'
    }
]

const myPosts = [
    {
        id : 1,
        imagePost: post1,
        postLink: "https://www.instagram.com/p/CFwtF0whXYU/"
    },
    {
        id : 2,
        imagePost: post2,
        postLink: "https://www.instagram.com/p/CFhWO_1hB2o/"
    },
    {
        id : 3,
        imagePost: post3,
        postLink: "https://www.instagram.com/p/CFMnG2GBNia/"
    },
    {
        id : 4,
        imagePost: post4,
        postLink: "https://www.instagram.com/p/CE6Ybhgh2wP/"
    }
]
function App() {

    const [withMenu, setWithMenu] = useState(false);

    

  return (
      <Router>
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
                        My Posts About IT
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
