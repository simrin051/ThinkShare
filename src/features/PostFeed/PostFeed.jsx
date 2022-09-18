import { Post } from './Post';
import './PostFeed.css';

const postButtonClicked = async () => {
    console.log("post btn clicked");
}

export const PostFeed = () => {
    return(<div class="post-container">
        <img  class="image-container" src="https://res.cloudinary.com/diirhxtse/image/upload/v1657112052/ThinkShare/Malvika_Iyer.jpg"/>
        <textarea placeholder="What's happening"></textarea>
        <button class="share-btn" onClick={postButtonClicked} >Share</button>
        <div class="postfeed">
            <Post/>
        </div>
    </div>)
}