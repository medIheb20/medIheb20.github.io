import React from 'react'
import './skills.scss'


export const SkillsIcon = ({iconSkill, nameSkill, colorCircle}) => {
    
    return(
        <div className="icon-container">
            <div className="wrapper-icon" style={{backgroundColor : colorCircle}}>
                <img 
                    className='icon-skill'
                    src={iconSkill}
                    alt={nameSkill}
                />
            </div>
            <h1 className="name-skill">
                {nameSkill}
            </h1>
        </div>
    )
}



