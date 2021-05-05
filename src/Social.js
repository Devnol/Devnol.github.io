import React from 'react'
import './Social.css'

function Social({href, alt, img}) {
    return(
        <div class="SocialButton">
            <a href={href}>
                <img src={img} alt={alt} title={alt}></img>
            </a>
        </div>
    ) 
}
export default Social;