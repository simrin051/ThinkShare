import { NavBar } from '../NavBar/NavBar';
import { FollowRequests } from '../FollowRequests/FollowRequests';
import './Profile.css';
export const Profile = () => {
    return(<div class="profile-container"><NavBar/>
    <div class="profile-body">
        <div class="profile-img-container">
            <div class="profile-img-background"></div>
            <div class="profile-img">
                <img  src="https://res.cloudinary.com/diirhxtse/image/upload/v1657112052/ThinkShare/Malvika_Iyer.jpg"/>
            </div>
        </div>
        <button>Follow</button>
        <div class="profile-details">
            <div>Master Shi Heng</div>
            <div>@mastershi</div>
            <div class="bio">belongs to the 35th Generation of Shaolin Masters and the headmaster of the Shaolin Temple Europe</div>
            <div class="biolink"><a href="">sample link</a></div>
            <div class="followers">0 Followers</div>
            <div class="following">0 Following</div>
        </div>       
    </div><FollowRequests/></div>)
}