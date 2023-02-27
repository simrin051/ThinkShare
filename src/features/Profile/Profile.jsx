import { useState } from 'react';
import { useSelector } from 'react-redux';
import userIcon from '../../assets/UserIcon.jpg';
import { FollowRequests } from '../FollowRequests/FollowRequests';
import { NavBar } from '../NavBar/NavBar';
import { EditProfileModal } from './EditProfileModal';
import './Profile.css';

export const Profile = () => {
    const [editProfile,setEditProfile] = useState(false)

    let userData = useSelector((state) => {
        return state.auth.user;
    })
    console.log(" user data in profile "+JSON.stringify(userData)); 
    const user = userData && userData.payload? userData.payload.user:null;
  
    const openEditModal= () => {
        setEditProfile(true);
    }

    return(<div class="profile-container"><NavBar/>
    { <div class="profile-body">
        <div class="profile-img-container">
            <div class="profile-img-background"></div>
            <div class="profile-img">
               <img src={userIcon} alt="profile img not loading"/>
            </div>
        
            <button class="fr mt-2 p-2 edit-btn"   onClick={()=>openEditModal()}>Edit Profile</button>
        </div>
        <div class="profile-details">
            <div class="username">{user?.username}</div>
            <div class="userhandle">@mastershi</div>
            <div class="userbio">{user?.bio? user?.bio:""}</div>
            {user?.portfolioUrl && <div class="userbiolink"><i class="fa-solid fa-link"></i><a href="https://leetcode.com/Simrin_Joshi/">{user?.portfolioUrl}</a></div>}
            <div class="profile-follow-container">
                <div class="userfollowers">0 Followers</div>
                <div class="userfollowing">0 Following</div>
            </div>
        </div>       
    </div>}
   { editProfile && <EditProfileModal user={user} setEditProfile={setEditProfile} openEditProfileDialog={editProfile}/>   } 
    <FollowRequests/></div>)
}