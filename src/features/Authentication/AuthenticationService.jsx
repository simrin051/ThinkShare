import { filter } from "@chakra-ui/react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setAuthCookies, setAuthorizationHeaders } from "../../utils/AuthCookies";
import { ERR_MISMATCH_PWD,ERROR_MIN_PWD,ERROR_EMAIL_FORMAT,INCORRECT_LOGIN_CREDENTIALS, USER_ALREADY_EXISTS } from "../../utils/constants";
import { setUser } from "./AuthenticationSlice";

export const signup =  createAsyncThunk("auth/signup",async ( {firstName, lastName, username, password},{ fulfillWithValue, rejectWithValue })=>{
  try {
  const res =  await axios.post(`/api/auth/signup`,({firstName, lastName, username, password}),{headers: {
    'Content-Type': 'application/json',
    }});
    return {user: res.data.createdUser,encodedToken: res.data.encodedToken};
  } catch(err) {
    return rejectWithValue(err);
  }
})

export const signin = createAsyncThunk("auth/signin",async (body,{fulfillWithValue,rejectWithValue })=>{
    try {
   const res =  await axios.post(`/api/auth/login`,(body),{headers: {
      'Content-Type': 'application/json',
      }});
      return {user: res.data.foundUser,encodedToken: res.data.encodedToken};

    } catch(error) {
      return rejectWithValue(error);
    }
})


export const formsReducer = (state, { type, payload }) => {
  switch (type) {
      case 'SET_FIRSTNAME': return {
          ...state,
          firstName: payload
      }
      case "SET_LASTNAME": return {
          ...state,
          lastName: payload
      }
      case "SET_EMAIL": return {
        ...state,
        email: payload
    }
      case "SET_USERNAME": return {
          ...state,
          username: payload
      }
      case "SET_PASSWORD": return {
          ...state,
          password: payload
      }
      case "SET_CPASSWORD": return {
        ...state,
        cpassword: payload
      }
      case "SET_LOGIN_USERNAME":  return {
        ...state,
        username: payload
      }
      case "SET_LOGIN_PASSWORD":  return {
        ...state,
        password: payload
      }
      case 'CLEAR_PASSWORDERR': return {
        ...state,
        passwordErr: "",
        cpasswordErr: ""
       }
       case 'CLEAR_CPASSWORDERR': return {
        ...state,
        passwordErr: "",
        cpasswordErr: ""
       }
       case 'CLEAR_EMAILERR': return {
        ...state,
        emailErr:""
       }
       case 'SET_PWD_LENGTH_ERR': return {
        ...state,
        passwordErr: ERROR_MIN_PWD
       }
     case 'SET_PWD_CPWD_MISMATCH': return {
       ...state,
       cpasswordErr: ERR_MISMATCH_PWD
     } 
     case 'EMAIL_ERROR': return {
      ...state,
      emailErr: ERROR_EMAIL_FORMAT
     }
     case 'SET_UNAUTHORIZED_ERROR': return {
      ...state,
      apiError: INCORRECT_LOGIN_CREDENTIALS
     }
     case 'SET_USER_ALREADY_EXISTS_ERROR': return {
      ...state,
      apiError: USER_ALREADY_EXISTS
     }
     case 'CLEAR_FIELDS': return {
        ...state,
        username: "",
        password: ""      
     }
      default:
          break;
  }
}
