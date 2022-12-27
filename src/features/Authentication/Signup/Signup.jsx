import { useForm } from 'react-hook-form';
import {
    Button, Modal, ModalBody,
    ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure
  } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
  import { TextField } from '../../../app/components/TextField';
import { errorReducer, formsReducer, signup } from '../Authentication';
import { useReducer } from 'react';
import { ERR_MISMATCH_PWD,ERROR_MIN_PWD,MIN_PWD_LENGTH,ERROR_EMAIL_FORMAT } from '../../../utils/constants';
import { ErrorTextField } from '../../../app/components/ValidationMessage';
import { useNavigate } from 'react-router-dom';
  
  export const SignupDialog = ({ openSignupDialog, setOpenSignupDialog }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
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
      checkFormValidity();
       dispatch(signup(formState))
       .then(() => {
        navigate('/home');
      });
      }

    
    const validateEmail = (mail) => {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
       {
         return (true)
       }
         return (false)
     }

    const checkFormValidity = () => {
      console.log(" form state "+JSON.stringify(formState)); 
      if(!validateEmail(formState.email)) {
        return formDispatch({
          type: "EMAIL_ERROR",
          payload: ERROR_EMAIL_FORMAT
        })
      }
      if(formState.password.length<MIN_PWD_LENGTH) {
        return formDispatch({
          type: "SET_PWD_LENGTH_ERR",
          payload: ERROR_MIN_PWD
        })
      }
      if(formState.password!=formState.cpassword) {
        return formDispatch({
          type: "SET_PWD_CPWD_MISMATCH",
          payload: ERR_MISMATCH_PWD
        })
      }  
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
           </ModalBody>
          <ModalFooter>
            <Button  colorScheme='blue' onClick={createNewAccount}>Create new account</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  
    );
  };
  