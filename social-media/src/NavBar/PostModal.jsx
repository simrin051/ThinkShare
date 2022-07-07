import './NavBar.css';
export const PostModal = () => {
    return(<div class="postmodal">
        <i class="fa fa-times postmodal-close-icon" aria-hidden="true"></i>
        <img  class="image-container postmodal-image" src="https://res.cloudinary.com/diirhxtse/image/upload/v1657112052/ThinkShare/Malvika_Iyer.jpg"/>
        <textarea class="postmodal-text-area" placeholder="What's happening"></textarea>
        <button class="share-btn">Share</button>
    </div>)
}