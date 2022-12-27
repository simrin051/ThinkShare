import {
  Button, Checkbox, Modal, ModalBody,
  ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure
} from '@chakra-ui/react';
import { unwrapResult } from '@reduxjs/toolkit';
import { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { TextField } from '../../../app/components/TextField';
import { ErrorTextField } from '../../../app/components/ValidationMessage';
import { ERROR_MIN_PWD,MIN_PWD_LENGTH ,INCORRECT_LOGIN_CREDENTIALS} from '../../../utils/constants';
import { errorReducer, formsReducer, signin } from '../Authentication';

export const LoginDialog = ({ openLoginDialog, setOpenLoginDialog }) => {
  
  const initialState = {
    username: "",
    password: "",
    passwordErr: "",
    apiError: ""
  }

  const [formState, formDispatch] = useReducer(formsReducer, initialState);

  const dispatch = useDispatch();
  const loginDialogClose = () => {
    setOpenLoginDialog(false);
    formDispatch({
      type: "CLEAR_ALL_LOGIN_FIELDS"
    })
  }
  
  const loginAccount = async () => {
   const  res = await dispatch(signin(formState));
    if(res.meta.requestStatus=="rejected") {
      formDispatch({
        type: "SET_API_ERROR",
        payload: INCORRECT_LOGIN_CREDENTIALS
      })
    }
  }

  const loginGuestAccount = async () => {
    formState.username = "testuser";
    formState.password = "testpassword";
    const  res = await dispatch(signin(formState));
    if(res.meta.requestStatus=="rejected") {
      formDispatch({
        type: "SET_API_ERROR",
        payload: INCORRECT_LOGIN_CREDENTIALS
      })
    }

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
