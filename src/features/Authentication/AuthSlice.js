import { createSlice } from '@reduxjs/toolkit'
import { Navigate } from 'react-router-dom';
import { INCORRECT_LOGIN_CREDENTIALS } from '../../utils/constants';
import { signup,signin} from './Authentication';

export let initialState = {
	msg: "",
	user: {},
	token: "",
	loading: false,
	error: ""
}


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
    },
    extraReducers: {
      [signup.pending]: (state, action) => {
        console.log("sign up pending");
      },
      [signup.fulfilled]: (state, action) => {
        console.log(" Action "+JSON.stringify(action));
        console.log("sign up fulfilled");
        Navigate("/home")
      },
      [signup.rejected]: (state, action) => {
        console.log("sign up rejected");
      },
      [signin.pending]: (state, action) => {
        console.log("sign up pending");
      },
      [signin.fulfilled]: (state, action) => {
        console.log(" Action "+JSON.stringify(action));
        console.log("sign in fulfilled");
      },
      [signin.rejected]: (state, action) => {
        console.log("rejected");
      }
      }    
});

export default authSlice.reducer;