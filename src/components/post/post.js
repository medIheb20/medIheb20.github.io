import React from 'react'
import './post.scss';





export const PostInstagram = ({postLink, imagePost}) => {

    return(
        <a className='link-post'  href={postLink} target='_blank' rel="noopener noreferrer"  >
            <div 
                className='container-post' 
                style={{ backgroundImage: `url(${imagePost})`}}
            />
        </a>
    )
}