import { NavBar } from '../../NavBar/NavBar';
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
            <button class="fr mt-2 p-2 follow-btn">Follow</button>
        </div>
        <div class="profile-details">
            <div class="username">Master Shi Heng</div>
            <div class="userhandle">@mastershi</div>
            <div class="userbio">belongs to the 35th Generation of Shaolin Masters and the headmaster of the Shaolin Temple Europe</div>
            <div class="userbiolink"><i class="fa-solid fa-link"></i><a href="https://leetcode.com/Simrin_Joshi/">https://leetcode.com/Simrin_Joshi/</a></div>
            <div class="profile-follow-container">
                <div class="userfollowers">0 Followers</div>
                <div class="userfollowing">0 Following</div>
            </div>
        </div>       
    </div><FollowRequests/></div>)
}