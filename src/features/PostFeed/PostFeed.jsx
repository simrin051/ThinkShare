import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useClickOutside from '../../app/customhooks/useClickOutside';
import { Post } from './Post';
import './PostFeed.css';
import { setPosts } from './PostSlice';



const postButtonClicked = async () => {
    console.log("post btn clicked");
}

export const PostFeed = () => {
    let posts = [];
    const ref = useRef();
    const [isOpen,setIsOpen] = useState(false);
    useClickOutside(ref,()=>setIsOpen(false));
    const dispatch = useDispatch();

    posts = useSelector((state) => {
        return state.post.posts;
    }) 
     
const sortPostsBasedOnLikes = () => {
    posts = [...posts].sort((a, b) => {
        return b.likes.likeCount - a.likes.likeCount;
    });
    dispatch(setPosts(posts));
}

const sortPostsBasedOnUpdatedTime = () => {
    posts = [...posts].sort((a, b) => {
        return Date.parse(b.updatedAt) - Date.parse(a.updatedAt);
    });
    dispatch(setPosts(posts));
}

    return(<div class="post-container">
         {!isOpen && <i  class="fa-solid fa-bars menu-icon" onClick={()=>{setIsOpen(true)}}></i>}
        {isOpen && <div class="dropdown" ref={ref}>
            <div class="option color-red"><i class="fa-solid fa-heart" onClick={()=>sortPostsBasedOnLikes()}></i> See most liked broadcasts</div> 
            <div class="option color-yellow"><i class="fa-solid fa-star-of-life" onClick={()=>sortPostsBasedOnUpdatedTime()}></i>See latest broadcasts</div>
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