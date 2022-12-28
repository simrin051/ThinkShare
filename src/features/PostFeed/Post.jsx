import { useState } from 'react';
import './Post.css';
import { PostDropdown } from './PostDropdown';

export const Post = ({postData}) => {
    const [menuIcon, setDisplayMenuIcon] = useState(false);
   
    return(
        <div class="post"> 
              <img class="image-container postmodal-image" src="https://res.cloudinary.com/diirhxtse/image/upload/v1657112052/ThinkShare/Malvika_Iyer.jpg" />
              <span class="username">{postData.username}</span> 
              <span class="postTime">{postData.createdAt}</span>
              {!menuIcon && <div class="post-menu-icon-container" onClick={()=>{setDisplayMenuIcon(!menuIcon)}}>
                <i class="post-menu-icon fa fa-ellipsis"></i>
              </div>}
                {menuIcon && <PostDropdown setDisplayMenuIcon={setDisplayMenuIcon} class="post-dropdown" id="post-dropdown"/>}
                <div class="postContent">
                    {postData.content}
                    <div class="post-icons">
                        <i class="fa-regular fa-heart"></i>
                        <i class="fa-regular fa-message"></i>
                        <i class="fa-regular fa-bookmark"></i>
                    </div>
                </div>
        </div>
    )
}
