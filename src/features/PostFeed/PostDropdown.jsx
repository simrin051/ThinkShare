import './PostDropdown.css';
import React, {useRef, useState} from "react";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from './PostService';
import { EditPostModal } from './EditPostModal';
import { Link } from 'react-router-dom';
import useClickOutside from '../../app/customhooks/useClickOutside';
export const PostDropdown =  React.forwardRef((props, ref) => {
   
    const {postData,setDisplayMenuIcon,setEditModal} = props;
    const {_id,content} = postData;
    
    const dispatch = useDispatch();

    useClickOutside(ref,()=>setDisplayMenuIcon(true));
  

    useEffect(() => {
      const handleClickOutside = (event) => {
          if (ref && ref.current && !ref.current.contains(event.target)) {
           setDisplayMenuIcon(true);
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
      }, [ref]);
  
    const postDelete = (postId) => {
      dispatch(deletePost(postId));
    } 

    const postEdit= (e) => {
      setEditModal(true);
      setDisplayMenuIcon(true);
    }

    return (<div class="container">
       
       <div ref={ref} class="menu-dropdown">
           <div  class="menu-option" onClick={()=>postDelete(_id)}> <i class="fa fa-trash-can"></i>Delete the post</div>
           <div class="menu-option"><i class="fa-sharp fa-solid fa-pen-to-square" onClick={postEdit}></i>Edit the post</div>
        </div> 
       </div>
    )
})