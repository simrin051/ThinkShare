import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import useClickOutside from '../../app/customhooks/useClickOutside';
import { getCookie, loggedInUserName } from '../../utils/AuthCookies';
import { userNameKey } from '../../utils/constants';
import { addBookmark } from './BookMarkService';
import { CommentModal } from './CommentModal';

import { addPostComment } from './CommentService';
import { EditPostModal } from './EditPostModal';
import './Post.css';
import { PostDropdown } from './PostDropdown';
import { dislikePost, fetchPostById, likePost } from './PostService';

export const Post = ({postData}) => {
    const [menuIcon, setDisplayMenuIcon] = useState(true);
    const [commentModal, setCommentModal] = useState(false);
    const [ editModal,setEditModal] = useState(false);
    console.log(loggedInUserName());
    const dispatch = useDispatch();
    
    const reactPost = ({_id,likes}) => {
        if(isPostLikedByUser(likes.likedBy,getCookie(userNameKey)))  {
            dispatch(dislikePost(_id))
        }
        else {
            dispatch(likePost(_id))
        } 
    }

    const isPostSharedByUserLoggedIn = () => {
        return (postData.username==loggedInUserName())?true:false;
    }

    const isPostLikedByUser = (likedByData,username) => {
        for(let i=0;i<likedByData.length;i++) {
            if(likedByData[i].username==(username)) {
                return true;
            }
        }
        return false;
    }

    const commentPost= (postData) => {
        setCommentModal(true);
    }

    const bookMarkPost = (postData) => {
        dispatch(addBookmark(postData._id));
    }

    const ref = useRef()
    useClickOutside(ref,()=>setDisplayMenuIcon(true));

    return(
        <div class="post"> 
              <img class="image-container postmodal-image" src="https://res.cloudinary.com/diirhxtse/image/upload/v1657112052/ThinkShare/Malvika_Iyer.jpg" />
              <span class="username">{postData.username}</span> 
              <span class="postTime">{postData.createdAt}</span>
              {menuIcon && isPostSharedByUserLoggedIn() &&  <div class="post-menu-icon-container" onClick={()=>{setDisplayMenuIcon(!menuIcon)}}>
                <i class="post-menu-icon fa fa-ellipsis"></i>
              </div>}
               {!menuIcon  && <PostDropdown ref={ref} postData={postData} menuIcon={menuIcon} setDisplayMenuIcon={setDisplayMenuIcon} setEditModal={setEditModal} class="post-dropdown" id="post-dropdown"/>}
                <div class="postContent">
                    {postData.content}
                    <div class="post-icons">
                        <i class="fa-regular fa-heart" onClick={()=>{reactPost(postData)}}> {postData.likes.likeCount}</i>
                        <i class="fa-regular fa-message" onClick={()=>{commentPost(postData)}}>{postData?.comments?.length}</i>
                        <i class="fa-regular fa-bookmark" onClick={()=>{bookMarkPost(postData)}}></i>
                    </div>
                </div>
               {<EditPostModal postData={postData} editModal={editModal} setEditModal={setEditModal}/>} 
              {commentModal && <CommentModal postData={postData} setCommentModal={setCommentModal}/>}
        </div>
    )
}

export default React.forwardRef(PostDropdown);