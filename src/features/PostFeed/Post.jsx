import './Post.css';
export const Post = () => {
    return(
        <div class="post">
              <img class="image-container postmodal-image" src="https://res.cloudinary.com/diirhxtse/image/upload/v1657112052/ThinkShare/Malvika_Iyer.jpg" />
              <span class="username">Username</span> 
              <span class="postTime">Time</span>
                <div class="postContent">
                    You need to complete this project!!
                    <div class="post-icons">
                        <i class="fa-regular fa-heart"></i>
                        <i class="fa-regular fa-message"></i>
                        <i class="fa-regular fa-bookmark"></i>
                    </div>
                </div>
        </div>
    )
}