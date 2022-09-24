import { useState } from 'react';
import './Post.css';
import { PostDropdown } from './PostDropdown';

export const Post = () => {
    const [menuIcon, setDisplayMenuIcon] = useState(false);
   
    return(
        <div class="post">
              <img class="image-container postmodal-image" src="https://res.cloudinary.com/diirhxtse/image/upload/v1657112052/ThinkShare/Malvika_Iyer.jpg" />
              <span class="username">Username</span> 
              <span class="postTime">Time</span>
              {!menuIcon && <div class="post-menu-icon-container" onClick={()=>{setDisplayMenuIcon(!menuIcon)}}>
                <i class="post-menu-icon fa fa-ellipsis"></i>
              </div>}
                {menuIcon && <PostDropdown setDisplayMenuIcon={setDisplayMenuIcon} class="post-dropdown" id="post-dropdown"/>}
                <div class="postContent">
                There is an important difference between using onClick in React and onClick in HTML. To avoid the default behavior in HTML, we simply return false, but in ReactJS, the preventDefault method needs to be called explicitly.
                    <div class="post-icons">
                        <i class="fa-regular fa-heart"></i>
                        <i class="fa-regular fa-message"></i>
                        <i class="fa-regular fa-bookmark"></i>
                    </div>
                </div>
        </div>
    )
}
