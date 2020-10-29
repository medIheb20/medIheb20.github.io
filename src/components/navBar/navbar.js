import React, { useEffect, useState } from 'react'
import './navbar.scss';
import myLogo from '../../assets/my-logo.png';
import cvLogo from '../../assets/svg/cv.svg'
import skillLogo from '../../assets/svg/skill.svg'
import projectLogo from '../../assets/svg/project.svg'
import { Link } from 'react-scroll'

export const Navbar = ({contactPage, setWithMenu, withMenu}) => {

    const [withScroll, setWithScroll] = useState(false);
    
    useEffect(() => {
        document.addEventListener("scroll", () => {
            if(window.scrollY > 0 || withMenu === true ) {
                    return setWithScroll(true);
            }
            return  setWithScroll(false);
        })
        if (withMenu == true){
            setWithScroll(true);
       }
    }, [withMenu]);
    console.log(withScroll);
    return(
        <div className={`wrapper-navbar ${withScroll ? 'with-scroll' : ''} ${withMenu ? 'with-menu' : null}`}>
            <div className='container-navbar'>
                <Link to='aboutMe' smooth={true} offset={withMenu ? -350 : -150}>
                    <div className='nav-item'>
                        <img 
                            className='icon-nav'
                            src={`${withScroll ? cvLogo : "https://img.icons8.com/nolan/64/parse-from-clipboard.png"}`}

                        />
                        <span className={`${withScroll ? 'title-scroll' : null } title-item`}>
                            About Me
                        </span>
                    </div>
                </Link>
                <Link to='skills' smooth={true} offset={withMenu ? -350 : -150}>
                    <div className='nav-item'>
                        <img 
                            className='icon-nav'
                            src={`${withScroll ? skillLogo : "https://img.icons8.com/nolan/64/development-skill.png"}`}
                        />
                        <span className={`${withScroll ? 'title-scroll' : null } title-item`}>
                            Skills
                        </span>
                    </div>
                </Link>
                <Link to='projects' smooth={true} offset={withMenu ? -350 : -150}>
                <div className='nav-item'>
                    <img 
                        className='icon-nav'
                        src={`${withScroll ? projectLogo : "https://img.icons8.com/nolan/64/workstation.png"}`}
                    />
                    <span className={`${withScroll ? 'title-scroll' : null } title-item`}>
                        Projects
                    </span>
                </div>
                </Link>
                <Link to='contact' smooth={true} offset={withMenu ? -350 : -150}>
                    <button onClick={contactPage} className={`${withScroll ? "button-scroll" : null} button-contact`}>
                        <span  className='contact-link'>
                            Contact
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    )
}