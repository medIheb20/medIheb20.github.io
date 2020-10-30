import React from 'react'; 
import './myProject.scss';




export const MyProject = ({image, title,text, technolgieUsed, projectLink}) => {

    return(
        <div className='wrapper-project'>
            <div 
                className='image-background'
                style={{
                    backgroundImage : `url(${image})`
                }}
            />
            <div className='text-project'>
                <span className='title-project'>
                    {title}
                </span>
                <span className='text'>
                    {text}
                </span>
                <span className='tech-used'>
                    {technolgieUsed}
                </span>
                <a className='project-link' rel='noopener noreferrer' target='_blank'   href={projectLink}>
                    <button
                        className='button-project-link'
                    >
                        See the project
                    </button>
                </a>
            </div>
        </div>
    )
}