import {
  useDisclosure
} from '@chakra-ui/react';
import { useState } from 'react';
import { LoginDialog } from '../Authentication/Login/Login';
import './Landing.css';

export const Landing = () => {
  const [openLoginDialog, setOpenLoginDialog] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  function onLogin() {
    onClose();
  }

  function openPostModal() {
    onOpen();
    setOpenLoginDialog(true);
  }

  return (<div class="container">
    <div class="blank-container">
    </div>
    <div class="auth-container">
      <div class="heading">Think & Share</div>
      <div class="subheading">Every thought we think is creating our future.</div>
      <div class="auth-buttons">
        <button>Sign Up Now</button>
        Already have an account?
        <button onClick={openPostModal}>Log In</button>
        <LoginDialog openLoginDialog={openLoginDialog} setOpenLoginDialog={setOpenLoginDialog}/>
      </div>
    </div>
  </div>)
}