import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import useClickOutside from '../../app/customhooks/useClickOutside';
import { Post } from './Post';
import './PostFeed.css';

const postButtonClicked = async () => {
    console.log("post btn clicked");
}


export const PostFeed = () => {
    const ref = useRef(null);
    useClickOutside(ref,()=>setMenuOptions(false));
    const [menuOptions,setMenuOptions] = useState(false);

   const posts = useSelector((state) => {
        return state.post.posts;
    })
    return(<div class="post-container">
         {!menuOptions && <i class="fa-solid fa-bars menu-icon" onClick={()=>{setMenuOptions(menuOptions=>!menuOptions)}}></i>}
        {menuOptions && <div ref={ref} class="dropdown">
            <div class="option color-red"><i class="fa-solid fa-heart "></i> See most liked broadcasts</div> 
            <div class="option color-yellow"><i class="fa-solid fa-star-of-life "></i>See latest broadcasts</div>
        </div>}
        <img  class="image-container" src="https://res.cloudinary.com/diirhxtse/image/upload/v1657112052/ThinkShare/Malvika_Iyer.jpg"/>
        <textarea class="postmodal-text-area" placeholder="What's happening">
        </textarea>
        <button class="share-btn" onClick={postButtonClicked} >Share</button>
        <div class="postfeed">
        {posts && posts.length>0 && posts.map((post) => {
            return <Post postData={post} />;
        })}
        </div>
    </div>)
}