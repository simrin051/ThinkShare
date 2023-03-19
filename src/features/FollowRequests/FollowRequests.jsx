import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUnFollowedUsers, updateFollower } from '../Authentication/UserService';
import './FollowRequests.css';
export const FollowRequests = () => {
    const user = useSelector((state) => {return state.auth.user})
    const dispatch = useDispatch();
    const [unFollowersData, setunFollowersData] = useState([]);

    useEffect(() => {
        //(async () => {
            getUnFollowedUsers("simrin").then(res=>{
                console.log("inside get unfollowed users ")
                setunFollowersData(res);
            })
      //  })();
      }, [user]);

      const updateUserFollower = async(id) => {
        await dispatch(updateFollower(id));
      }

      return(
        <div class="follow-container">
            {unFollowersData?.length>0 && unFollowersData?.map(user=> {
                return(
                    <div class="container">
                    <img class="image-container postmodal-image" src={user.profilePhoto}></img>
                    <div class="text-container">
                        <div class="username">{user.firstName} {user.lastName}</div>
                        <div class="handle">@{user.firstName} {user.lastName}</div>
                    </div>
                    <button class="follow-btn" onClick={()=>updateUserFollower(user._id)}>Follow</button>
                    </div>
                )
            })
    }    
        </div>
    )
}