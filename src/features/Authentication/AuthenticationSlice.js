import { CollectionsBookmarkRounded } from '@mui/icons-material';
import { createSlice } from '@reduxjs/toolkit'
import { Navigate, useNavigate } from 'react-router-dom';
import { setAuthCookies, setAuthorizationHeaders } from '../../utils/AuthCookies';
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
      }},
      setUser: (state,user) => {
        return  {
          ...state,
          user: user
        }  
      }
    },
    extraReducers: {
      [signup.pending]: (state, action) => {
      },
      [signup.fulfilled]: (state, action) => {
        state.token = action.payload.encodedToken;
        state.user = action.payload.user;
        setAuthCookies({encodedToken: state.token,username: state.user.username});
        setAuthorizationHeaders();
      },
      [signup.rejected]: (state, action) => {
      },
      [signin.pending]: (state, action) => {
  
      },
      [signin.fulfilled]: (state, action) => {
        state.error = "";
        state.token = action.payload.encodedToken;
        state.user = action.payload.user;
        setAuthCookies({encodedToken: state.token,username: state.user.username});
        setAuthorizationHeaders();
      },
      [signin.rejected]: (state, action) => {
      
      }
      }    
});

export const {setBookmarks,setUser} =  authSlice.actions;
export default authSlice.reducer;