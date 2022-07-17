import { FollowRequests } from '../features/FollowRequests/FollowRequests';
import { NavBar } from '../NavBar/NavBar';
import { PostFeed } from '../features/PostFeed/PostFeed';
import './Home.css';
export const Home = () => {return (
    <div class="home-container"><NavBar/><PostFeed/><FollowRequests/></div>)
}