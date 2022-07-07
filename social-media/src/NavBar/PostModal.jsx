import './NavBar.css';
import '../Home/Home.css';
export const PostModal = (props) => {
    function closePostModal() {
        props.modalOpen(false);
    }
    return(<div class="postmodal">
        <i class="fa fa-times postmodal-close-icon" aria-hidden="true" onClick={closePostModal} ></i>
        <img  class="image-container postmodal-image" src="https://res.cloudinary.com/diirhxtse/image/upload/v1657112052/ThinkShare/Malvika_Iyer.jpg"/>
        <textarea class="postmodal-text-area" placeholder="What's happening"></textarea>
        <button class="share-btn" onClick={closePostModal}>Share</button>
    </div>)
}