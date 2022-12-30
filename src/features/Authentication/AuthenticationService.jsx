import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setAuthCookies } from "../../utils/AuthCookies";
import { ERR_MISMATCH_PWD,ERROR_MIN_PWD,ERROR_EMAIL_FORMAT } from "../../utils/constants";

export const signup =  createAsyncThunk("auth/signup",async ( {firstName, lastName, username, password},{ rejectWithValue })=>{
  try {
  await axios.post(`/api/auth/signup`,({firstName, lastName, username, password}),{headers: {
    'Content-Type': 'application/json',
    }}).then((res)=>{
      let cookieObj = {
        encodedToken: res.data.encodedToken,
        username: username
      }
      setAuthCookies(cookieObj);
    });
  } catch(err) {
    return rejectWithValue(err.statusText);
  }
})

export const signin = createAsyncThunk("auth/signin",async (body,{ rejectWithValue })=>{
    try {
    await axios.post(`/api/auth/login`,(body),{headers: {
      'Content-Type': 'application/json',
      }});
    } catch(err) {
      return rejectWithValue(err.statusText);
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
      default:
          break;
  }
}
