import { useState } from 'react';
import { LoginDialog } from '../Authentication/Login/Login';
import './Landing.css';

export const Landing = () => {
   const[openLoginDialog, setOpenLoginDialog] = useState(false);
   return( <div class="container">
        <div class="blank-container">
        </div>
        <div class="auth-container">
        <LoginDialog openLoginDialog={openLoginDialog} setOpenLoginDialog={setOpenLoginDialog} />
            
            <div class="heading">Think & Share</div>
            <div class="subheading">Every thought we think is creating our future.</div>
            <div class="auth-buttons">
            <button>Sign Up Now</button>
            Already have an account?
            <button onClick={()=>setOpenLoginDialog(true)}>Log In</button>
            </div>
        </div> 
    </div>)
}