import { createSlice } from '@reduxjs/toolkit'
import { Navigate, useNavigate } from 'react-router-dom';
import { INCORRECT_LOGIN_CREDENTIALS } from '../../utils/constants';
import { Navigation } from '../../utils/Navigation';
import { signup,signin} from './AuthenticationService';

export let initialState = {
	msg: "",
	user: {},
	token: "",
	loading: false,
	error: "",
  bookmarks: {}
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      setBookmarks: (state,{payload}) => {
        return{
       ...state, 
       bookmarks :payload
      }}
    },
    extraReducers: {
      [signup.pending]: (state, action) => {
      },
      [signup.fulfilled]: (state, action) => {
    
      },
      [signup.rejected]: (state, action) => {
      },
      [signin.pending]: (state, action) => {
      },
      [signin.fulfilled]: (state, action) => {
      },
      [signin.rejected]: (state, action) => {
      }
      }    
});

export const {setBookmarks} =  authSlice.actions;
export default authSlice.reducer;