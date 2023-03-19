
import { useDispatch } from 'react-redux';
import { getCookie } from '../../utils/AuthCookies';
import { userNameKey } from '../../utils/constants';
import { getBookMarks, getUnFollowedUsers, getUser } from '../Authentication/UserService';
import { FollowRequests } from '../FollowRequests/FollowRequests';
import { NavBar } from '../NavBar/NavBar';
import { PostFeed } from '../PostFeed/PostFeed';
import { getPosts } from '../PostFeed/PostService';
import './Home.css';
export const Home = () => {
    const dispatch = useDispatch();
    dispatch(getPosts())
    dispatch(getUser(getCookie(userNameKey)))
    return (
    <div class="home-container"><NavBar/><PostFeed/><FollowRequests/></div>)
}