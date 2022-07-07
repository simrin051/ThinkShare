import './NavBar.css';
import logo from '../assets/logo.jpg';
import { PostModal } from './PostModal';
import { useState } from 'react';
export const NavBar = () => {
    const [postModal,setPostModal] = useState(false);
    function openPostModal() {
        setPostModal(true);
    }
    return(<div class="navbar-container">
        <div class="logo"><img src={logo} class="logo-icon"/></div>
        <ul class="sidebar-nav-links">
            <li class="sidebar-nav-link"><i class="sidebar-nav-icon fa-solid fa-house"></i>Home</li>
            <li class="sidebar-nav-link"><i class="sidebar-nav-icon fa-solid fa-hashtag"></i>Explore</li>
            <li class="sidebar-nav-link"><i class="sidebar-nav-icon fa-solid fa-bookmark"></i>BookMarks</li>
            <li class="sidebar-nav-link"><i class="sidebar-nav-icon fa-solid fa-user"></i>Profile</li>
        </ul>
        <button class="navbar-btn" onClick={openPostModal}>Think & Share</button>
        {postModal && <PostModal></PostModal>}
        <div class="navbar-vl"></div>
        </div>
    )
}