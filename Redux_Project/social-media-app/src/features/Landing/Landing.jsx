import { LoginDialog } from '../Authentication/Login/Login';
import './Landing.css';

export const Landing = () => {
   return( <div class="container">
        <div class="blank-container">
        </div>
        <div class="auth-container">
            <div class="heading">Think & Share</div>
            <div class="subheading">Every thought we think is creating our future.</div>
            <div class="auth-buttons">
            <button>Sign Up Now</button>
            Already have an account?
            <button>Log In</button>
            <LoginDialog/>
            </div>
        </div>
    </div>)
}