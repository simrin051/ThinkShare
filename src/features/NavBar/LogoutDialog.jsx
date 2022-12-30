import { tokenKey, userNameKey } from '../../utils/constants';
import './NavBar.css';

export const LogoutDialog = () =>{

    const logoutUser = () => {
        localStorage.removeItem(tokenKey);
        localStorage.removeItem(userNameKey);
    }

    return(
        <div class="logout-container">
        <img class="image-container postmodal-image" src="https://res.cloudinary.com/diirhxtse/image/upload/v1657112052/ThinkShare/Malvika_Iyer.jpg" />
        <div class="user-details">
            <h2>username</h2>
            <h2>username</h2>
        </div>
        <div class="logout-username" onClick={logoutUser}>Log out username</div>
        </div>
)
}