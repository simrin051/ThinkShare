import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie} from "../../utils/AuthCookies";
import { tokenKey } from "../../utils/constants";
import { setPosts } from "./postSlice";

export const addPostComment = createAsyncThunk(
    'postComment/addComment',async({id,comment},thunkAPI)=> {   
        try {
            await axios.post(`/api/comments/add/${id}`,{commentData:{text:comment}},{headers: {
                  'Content-Type': 'application/json',
                   'authorization': getCookie(tokenKey)
                  }}).then((result)=>{
                    
                  })
          } catch (err) {
              thunkAPI.rejectWithValue(err);
          }
      
  })