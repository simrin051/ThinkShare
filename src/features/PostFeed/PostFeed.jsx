import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Post } from './Post';
import './PostFeed.css';
import { getPosts } from './PostService';



const postButtonClicked = async () => {
    console.log("post btn clicked");
}


export const PostFeed = () => {
   // const dispatch = useDispatch();  
    const posts = useSelector((state) => {
        console.log(" inside post feed "+JSON.stringify(state));
        return state.post.posts;
    })
    return(<div class="post-container">
        <img  class="image-container" src="https://res.cloudinary.com/diirhxtse/image/upload/v1657112052/ThinkShare/Malvika_Iyer.jpg"/>
        <textarea placeholder="What's happening"></textarea>
        <button class="share-btn" onClick={postButtonClicked} >Share</button>
        <div class="postfeed">
        {posts && posts.map((post) => {
            return <Post postData={post} />;
        })}
        </div>
    </div>)
}