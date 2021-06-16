import React from 'react'; 
import './myProject.scss';




export const MyProject = ({image, title,text, technolgieUsed, projectLink}) => {

  const eventAnalytic = () => {
    if (window.sa_event) {
      console.log("sa_event is defined");
      window.sa_event(title);
    } else {
      console.error("sa_event is not defined");
    }
  }

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
                <ul className='project-description'>
                    {text.map(item => 
                        <li>{item}</li>    
                    )}
                </ul>
                <span className='tech-used'>
                    {technolgieUsed}
                </span>
                <a onClick={eventAnalytic} className='project-link' rel='noopener noreferrer' target='_blank'   href={projectLink}>
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