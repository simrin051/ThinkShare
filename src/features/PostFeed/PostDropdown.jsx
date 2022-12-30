import './PostDropdown.css';
import {useRef, useState} from "react";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from './PostService';
import { EditPostModal } from './EditPostModal';
import { Reddit } from '@mui/icons-material';


export const PostDropdown = ({setDisplayMenuIcon,_id,content,username}) => {

    const dispatch = useDispatch();
    const ref = useRef();
    const [ editModel,setEditModal] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (ref && ref.current && !ref.current.contains(event.target)) {
            setDisplayMenuIcon(false);
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
      }, [ref]);
    
    const postDelete = (postId) => {
      dispatch(deletePost(postId));
    } 

    const postEdit= (postId) => {
      
      setEditModal(editModel=>!editModel);
    }

    return (<div class="container">
        <div ref={ref} class="menu-dropdown">
           <div class="menu-option" onClick={()=>postDelete(_id)}> <i class="fa fa-trash-can"></i>Delete the post</div>
           <div class="menu-option" onClick={()=>postEdit(_id)}><i class="fa-sharp fa-solid fa-pen-to-square" ></i>Edit the post</div>
        </div>
      { editModel && <EditPostModal id={_id} content={content}/>}
        </div>
    )
}