import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie} from "../../utils/AuthCookies";
import { tokenKey } from "../../utils/constants";

export const addPostComment = createAsyncThunk(
    'postComment/addComment',async(postId,postComment,thunkAPI)=> {   
        console.log(" inside add post comment ");
        try {
            await axios.post(`/api/comments/add/${postId}`,{commentData:{text:postComment}},{headers: {
                  'Content-Type': 'application/json',
                   'authorization': getCookie(tokenKey)
                  }}).then((res)=>{})
          } catch (err) {
            console.log(err);
              thunkAPI.rejectWithValue(err);
          }
})