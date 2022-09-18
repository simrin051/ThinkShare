import {
  useDisclosure
} from '@chakra-ui/react';
import { useState } from 'react';
import { LoginDialog } from '../Authentication/Login/Login';
import { SignupDialog } from '../Authentication/Signup/Signup';
import './Landing.css';

export const Landing = () => {
  const [openLoginDialog, setOpenLoginDialog] = useState(false);
  const [openSignupDialog, setOpenSignupDialog] = useState(false);

  function openPostModal() {
    setOpenLoginDialog(true);
  }

  return (<div class="container">
    <div class="blank-container">
    </div>
    <div class="auth-container">
      <div class="heading">Think & Share</div>
      <div class="subheading">Every thought we think is creating our future.</div>
      <div class="auth-buttons">
        <button onClick={()=>setOpenSignupDialog(true)}>Sign Up Now</button>
        Already have an account?
        <button onClick={openPostModal}>Log In</button>
        <LoginDialog openLoginDialog={openLoginDialog} setOpenLoginDialog={setOpenLoginDialog}/>
        <SignupDialog openSignupDialog={openSignupDialog} setOpenSignupDialog={setOpenSignupDialog}/>
      
      </div>
    </div>
  </div>)
}