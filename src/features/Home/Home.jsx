
import { useDispatch } from 'react-redux';
import { FollowRequests } from '../FollowRequests/FollowRequests';
import { NavBar } from '../NavBar/NavBar';
import { PostFeed } from '../PostFeed/PostFeed';
import { getPosts } from '../PostFeed/PostService';
import './Home.css';
export const Home = () => {
    const dispatch = useDispatch();
    dispatch(getPosts())
    return (
    <div class="home-container"><NavBar/><PostFeed/><FollowRequests/></div>)
}