import React from 'react'
import './post.scss';





export const PostInstagram = ({postLink, imagePost}) => {

    return(
        <div 
            onClick={() => window.location.href= postLink}  
            className='container-post' 
            style={{ backgroundImage: `url(${imagePost})`}}
        />
    )
}