import {
  Button, Checkbox, Modal, ModalBody,
  ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure
} from '@chakra-ui/react';
import { unwrapResult } from '@reduxjs/toolkit';
import { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TextField } from '../../../app/components/TextField';
import { ErrorTextField } from '../../../app/components/ValidationMessage';
import { setAuthCookiesForTestUser } from '../../../utils/AuthCookies';
import { ERROR_MIN_PWD,MIN_PWD_LENGTH ,INCORRECT_LOGIN_CREDENTIALS} from '../../../utils/constants';
import { errorReducer, formsReducer, signin } from '../AuthenticationService';

export const LoginDialog = ({ openLoginDialog, setOpenLoginDialog }) => {
  
  const initialState = {
    username: "",
    password: "",
    passwordErr: "",
    apiError: ""
  }
  const error = useSelector((state) => {return state.auth.error})

  const [formState, formDispatch] = useReducer(formsReducer, initialState);

  const dispatch = useDispatch();
  const loginDialogClose = () => {
    setOpenLoginDialog(false);
    formDispatch({
      type: "CLEAR_ALL_LOGIN_FIELDS"
    })
  }

  const navigate = useNavigate();
  const loginAccount = () => {
   dispatch(signin(formState))
  .unwrap()
   .then(()=>{
    navigate('/home');
  })
  .catch((error)=>{
    const {status} = error.response;
    if(status==401) {
    formDispatch({
      type: "SET_UNAUTHORIZED_ERROR",
      payload: INCORRECT_LOGIN_CREDENTIALS
    })
    }
  }) 
  }

  const loginGuestAccount = async () => {
   
    formState.username = "testuser";
    formState.password = "testpassword";

    const  res = await dispatch(signin(formState))
    .then(() => {
      navigate('/home');
    })
    .catch((error)=>{
      formDispatch({
        type: "SET_API_ERROR",
        payload: INCORRECT_LOGIN_CREDENTIALS
      })
    });
  }

  return (
    openLoginDialog && <Modal isOpen={openLoginDialog} onClose={loginDialogClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Log In</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <TextField label="Username" type="text"  onChange={(e)=>formDispatch({type: 'SET_LOGIN_USERNAME', payload: e.target.value})} />
          <TextField label="Password" placeholder="******" type="password"  onChange={(e)=>formDispatch({type: 'SET_LOGIN_PASSWORD', payload: e.target.value})}  />
          {formState && formState.apiError && <ErrorTextField text={formState.apiError}></ErrorTextField>}
          <Checkbox>Remember me</Checkbox>
        </ModalBody>
        <ModalFooter>
          <Button  colorScheme='blue' mr={3} onClick={loginAccount}>Log In</Button>
          <Button  colorScheme='blue' onClick={loginGuestAccount}>Log In as guest</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>

  );
};
