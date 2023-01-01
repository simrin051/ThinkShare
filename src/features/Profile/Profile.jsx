import { NavBar } from '../NavBar/NavBar';
import { FollowRequests } from '../FollowRequests/FollowRequests';
import './Profile.css';
import { EditProfileModal } from './EditProfileModal';
import { useState } from 'react';
import { useEffect } from 'react';
import { getCookie } from '../../utils/AuthCookies';
import { getUser } from '../Authentication/UserService';
import { userNameKey } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';

export const Profile = () => {
    const [editProfile,setEditProfile] = useState(false)

    let { payload }= useSelector((state) => {
        return state.auth.user;
    }) 
    
    const {user} = payload;
    const openEditModal= () => {
        setEditProfile(true);
    }

    return(<div class="profile-container"><NavBar/>
    { user && <div class="profile-body">
        <div class="profile-img-container">
            <div class="profile-img-background"></div>
            <div class="profile-img">
                <img  src={user?.profilePhoto}/>
            </div>
        
            <button class="fr mt-2 p-2 edit-btn"   onClick={()=>openEditModal()}>Edit Profile</button>
        </div>
        <div class="profile-details">
            <div class="username">{user?.username}</div>
            <div class="userhandle">@mastershi</div>
            <div class="userbio">{user?.bio}</div>
            <div class="userbiolink"><i class="fa-solid fa-link"></i><a href="https://leetcode.com/Simrin_Joshi/">{user?.portfolioUrl}</a></div>
            <div class="profile-follow-container">
                <div class="userfollowers">0 Followers</div>
                <div class="userfollowing">0 Following</div>
            </div>
        </div>       
    </div>}
   { editProfile && <EditProfileModal userData={user} openEditProfileDialog={editProfile}/>   } 
    <FollowRequests/></div>)
}