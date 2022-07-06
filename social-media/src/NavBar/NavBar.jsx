import './NavBar.css';
import logo from '../assets/logo.jpg';
export const NavBar = () => {
    return(<div class="navbar-container">
        <div class="logo"><img src={logo} class="logo-icon"/></div>
        <ul class="sidebar-nav-links">
            <li class="sidebar-nav-link"><i class="sidebar-nav-icon fa-solid fa-house"></i>Home</li>
            <li class="sidebar-nav-link"><i class="sidebar-nav-icon fa-solid fa-hashtag"></i>Explore</li>
            <li class="sidebar-nav-link"><i class="sidebar-nav-icon fa-solid fa-bookmark"></i>BookMarks</li>
            <li class="sidebar-nav-link"><i class="sidebar-nav-icon fa-solid fa-user"></i>Profile</li>
        </ul>
        <button class="navbar-btn">Think & Share</button>
        <div class="navbar-vl"></div>
        </div>
    )
}