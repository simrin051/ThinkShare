import './Profile.css';
export const Profile = () => {
    console.log("inside profile component");
    return(<div class="profile-container">
        <div class="profile-img">
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
    </div>)
}