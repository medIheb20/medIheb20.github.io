import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Navbar } from './components/navBar/navbar';
import { SkillsIcon } from './components/skills';
import { MyProject } from './components/projects/myProject';
import project1 from './assets/kprm.png';
import project2 from './assets/eatEasy.png';
import project3 from './assets/crwen-shop.png';
import { PostInstagram } from './components/post/post';
import  facebookLogo  from './assets/my-icons-collection/001-facebook.png'
import  instagramLogo  from './assets/my-icons-collection/002-instagram.png'
import  linkedinLogo  from './assets/my-icons-collection/003-linkedin.png'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import MenuLogo from './assets/svg/menu.svg'
import { motion } from 'framer-motion'
import myResume from './assets/mcv.pdf'



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
        iconSkill : "https://img.icons8.com/color/480/000000/apollo.png",
        nameSkill : "Apollo Client",
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
        text : 'its a website informative for a company in south africa, its the first real project for me i apply all my knowlodge in html and css and bootstrap in this project ',
        technolgieUsed: 'javascript, html, css',
        projectLink : 'https://kprm.co.za/'
    },
    {
        id : 2,
        image : project2,
        title : 'Eat Easy App',
        text : 'a Food Delivery app, my first complex front end i did , i use all my what i learned for the single page application and practice for this project i use the firebse for the database and the backend',
        technolgieUsed: 'ReactJs, ReduxJs, Firebase, Styled-components',
        projectLink : 'https://github.com/medIheb20/EatEasy-Delivery-Food'
    },
    {
        id : 3,
        image : project3,
        title : 'Crwen Clothes Shop',
        text : 'its a project for what i learn from a course from udemy React Developer, its a project totally front end with firebase for the backend',
        technolgieUsed: 'ReactJs, ReduxJs, Firebase, Sass',
        projectLink : 'https://crwn-live.herokuapp.com/'
    }
]

const myPosts = [
    {
        id : 1,
        imagePost: 'https://instagram.ftun7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/120274930_3417296495031424_1248175127000185791_n.jpg?_nc_ht=instagram.ftun7-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=NucYkSeVAXEAX-HlPl6&_nc_tp=24&oh=e5bb9dccaf0d66ef7d0c307e9eefe982&oe=5FAF1B1D',
        postLink: "https://www.instagram.com/p/CFwtF0whXYU/"
    },
    {
        id : 2,
        imagePost: 'https://instagram.ftun7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/120029291_916050405586603_4399827925395623795_n.jpg?_nc_ht=instagram.ftun7-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=NesM7ZUFN6wAX9TBAeC&_nc_tp=24&oh=196d3548d27514e3b7efa039c392ed59&oe=5FAE4F26',
        postLink: "https://www.instagram.com/p/CFhWO_1hB2o/"
    },
    {
        id : 3,
        imagePost: 'https://instagram.ftun7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/119681717_649305712637920_6726186345570243009_n.jpg?_nc_ht=instagram.ftun7-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=WkTnqPu7NpUAX81T9Xx&_nc_tp=24&oh=c536473eaedd2f39e73d9ff34e9c6bfe&oe=5FAE6D1F',
        postLink: "https://www.instagram.com/p/CFMnG2GBNia/"
    },
    {
        id : 4,
        imagePost: 'https://instagram.ftun7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/118994102_740759216481429_1397600272369908969_n.jpg?_nc_ht=instagram.ftun7-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=P2HodwgLxFsAX-lKdDK&_nc_tp=24&oh=eb879f1f6ded9edc1f601bb362d4d5d4&oe=5FAF6867',
        postLink: "https://www.instagram.com/p/CE6Ybhgh2wP/"
    }
]
function App() {

    const [withContact, setWithContact] = useState(false)
    const [withMenu, setWithMenu] = useState(false);

    


    

  return (
      <Router>
        <div className='body-container' >
            <Navbar 
                withMenu={withMenu}
                setWithMenu={setWithMenu}
            />
            <div className='container-all-pages' onClick={() => withMenu == true ? setWithMenu(false) : null} >
                <div className='wrapper-menu-mobile' onClick={() => setWithMenu(true)}>
                    <img  src={MenuLogo}/>
                </div>
                
                <div className='title-page' >
                    <motion.h1 initial={true} animate={{ x: 300}} className='my-name'>
                        HI , I'M MOHAMED IHEB HICHRI .
                    </motion.h1>
                    <motion.h2 initial={true} animate={{ x: -300}} className='surname-page'>
                        I'M AN FRONT END DEVELOPER AND REACT DEVELOPER .
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
                                I am not the best programmer, but I am a programmer with big habits<pre />
                                I am front end developer and I love what I do and every day enjoy the learning process and I work for a lot of technologies like ReactJs and a lot of technologies of the front end <pre /> 
                                I am a Business Computing student and with my school, I try to learn new things about programming every day without stopping 
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
                                    Although I’m  taking on new projects at the moment, you’re more than welcome to say a big hello via email at <a target='_blank' href='mailto:ihebhichri12@gmail.com' className='link-work'>ihebhichri12@gmail.com</a> or feel free to drop me a line on <a target='_blank'  href='https://www.instagram.com/mediheb20/' className='link-work'>Instagram</a>
                                </span>
                            </div>
                            <div className='bottom-div'>
                                <span className='userName'>
                                    © MedIheb20
                                </span>
                                <div className='icons-social-media'>
                                    <a target='_blank'  href='https://www.facebook.com/medIheb20/' >
                                        <img src={facebookLogo} />
                                    </a>
                                    <a target='_blank' href='https://www.instagram.com/mediheb20/'>
                                        <img src={instagramLogo} />
                                    </a>
                                    <a target='_blank' href='https://www.linkedin.com/in/mediheb20/'>
                                        <img src={linkedinLogo} />
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
