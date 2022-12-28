import './PostDropdown.css';
import {useRef} from "react";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from './PostService';


export const PostDropdown = ({setDisplayMenuIcon,postId}) => {

    const dispatch = useDispatch();
    const ref = useRef();
   
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (!ref.current.contains(event.target)) {
            setDisplayMenuIcon(false);
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
      }, [ref]);
    
    const postDelete = (postId) => {
      dispatch(deletePost(postId));
    } 

    return (
        <div ref={ref} class="menu-dropdown">
           <div class="menu-option"> <i class="fa fa-trash-can" onClick={()=>postDelete(postId)}></i>Delete the post</div>
           <div class="menu-option"><i class="fa-sharp fa-solid fa-pen-to-square"></i>Edit the post</div>
        </div>
    )
}