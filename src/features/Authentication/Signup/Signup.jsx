import { useForm } from 'react-hook-form';
import {
    Button, Modal, ModalBody,
    ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure
  } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
  import { TextField } from '../../../app/components/TextField';
import { errorReducer, formsReducer, signup } from '../AuthenticationService';
import { useReducer } from 'react';
import { ERR_MISMATCH_PWD,ERROR_MIN_PWD,MIN_PWD_LENGTH,ERROR_EMAIL_FORMAT, USER_ALREADY_EXISTS } from '../../../utils/constants';
import { ErrorTextField } from '../../../app/components/ValidationMessage';
import { useNavigate } from 'react-router-dom';
import { getPosts } from '../../PostFeed/PostService';
  
  export const SignupDialog = ({ openSignupDialog, setOpenSignupDialog }) => {
    let errorInSignUpForm = false;
    const dispatch = useDispatch();
    const initialState = {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      cpassword: "",
      passwordErr: "",
      cpasswordErr: ""
    }

    const [formState, formDispatch] = useReducer(formsReducer, initialState);
    
    const signupDialogClose = () => {
        setOpenSignupDialog(false);
        formDispatch({
          type: "CLEAR_ALL_SIGNUP_FIELDS"
        })
    }
    const navigate = useNavigate();
    const createNewAccount =  () => {
      if(!isFormInvalid()) { 
      dispatch(signup(formState))
      .unwrap()
       .then(() => {
        navigate('/home');
      })
      .catch((error)=>{
        console.log(error);
        const {status} = error.response;
        console.log( " error response status "+(error.response.status));
        if(status == 422) {
          formDispatch({
            type: "SET_USER_ALREADY_EXISTS_ERROR",
            payload: USER_ALREADY_EXISTS
          })
        }
      });
    }
    }

    const validateEmail = (mail) => {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
         return true; 
      return false;
     }

    const isFormInvalid = () => {
      if(!validateEmail(formState.email)) {
        errorInSignUpForm = true;
         formDispatch({
          type: "EMAIL_ERROR",
          payload: ERROR_EMAIL_FORMAT
        })
      }
      if(formState.password.length<MIN_PWD_LENGTH) {
        errorInSignUpForm = true;
         formDispatch({
          type: "SET_PWD_LENGTH_ERR",
          payload: ERROR_MIN_PWD
        })
      }
      if(formState.password!=formState.cpassword) {
        errorInSignUpForm = true;
         formDispatch({
          type: "SET_PWD_CPWD_MISMATCH",
          payload: ERR_MISMATCH_PWD
        })
      }
      return errorInSignUpForm;  
    }

    return (
        openSignupDialog && <Modal isOpen={openSignupDialog} onClose={signupDialogClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign up</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TextField label="First Name" type="text" onChange={(e)=>{formDispatch({type: 'SET_FIRSTNAME', payload: e.target.value})}}/>
            <TextField label="Last Name" type="text" onChange={(e)=>{formDispatch({type:'SET_LASTNAME',payload: e.target.value})}}/>
            <TextField label="Email Address"  type="email" onChange={(e)=>{formDispatch({type: 'SET_EMAIL',payload: e.target.value})}} onFocus={(e)=>formDispatch({type:'CLEAR_EMAILERR'})}/>
            {formState && formState.emailErr && <ErrorTextField text={formState.emailErr}></ErrorTextField>}
            <TextField label="User Name" type="text" onChange={(e)=>{formDispatch({type: 'SET_USERNAME',payload: e.target.value})}} />
            <TextField label="Password" placeholder="******" type="password" onChange={(e)=>{formDispatch({type: 'SET_PASSWORD',payload: e.target.value})}} onFocus={(e)=>formDispatch({type:'CLEAR_PASSWORDERR'})} />       
            {formState && formState.passwordErr && <ErrorTextField text={formState.passwordErr}></ErrorTextField>}           
            <TextField label="Confirm Password" placeholder="******" type="password" onChange={(e)=>{formDispatch({type: 'SET_CPASSWORD',payload: e.target.value})}} onFocus={(e)=>formDispatch({type:'CLEAR_CPASSWORDERR'})}/>
            {formState && formState.cpasswordErr && <ErrorTextField text={formState.cpasswordErr}></ErrorTextField>}
            {formState && formState.apiError && <ErrorTextField text={formState.apiError}></ErrorTextField>}
            </ModalBody>
          <ModalFooter>
            <Button  colorScheme='blue' onClick={createNewAccount}>Create new account</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  
    );
  };
  