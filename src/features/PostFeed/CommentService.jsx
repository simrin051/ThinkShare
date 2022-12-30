import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie} from "../../utils/AuthCookies";
import { tokenKey } from "../../utils/constants";

export const addPostComment = createAsyncThunk(
    'postComment/addComment',async(postId,thunkAPI)=> {   
        console.log(" inside add post comment ");
        try {
            await axios.post(`/api/comments/add/${postId}`,{commentData:{text:"serene"}},{headers: {
                  'Content-Type': 'application/json',
                   'authorization': getCookie(tokenKey)
                  }}).then((res)=>{console.log(res)})
          } catch (err) {
              thunkAPI.rejectWithValue(err);
          }
})