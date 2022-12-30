import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookmark } from './BookMarkService';
import { addPostComment } from './CommentService';
import './Post.css';
import { PostDropdown } from './PostDropdown';
import { dislikePost, fetchPostById, likePost } from './PostService';

export const Post = ({postData}) => {
    const [menuIcon, setDisplayMenuIcon] = useState(false);
    const [commentModal, setCommentModal] = useState(false);
    const dispatch = useDispatch();
    const reactPost = ({_id,username,likes}) => {
       
        fetchThePost(_id,username);
    }

    const fetchThePost = (_id,username) => {
        dispatch(fetchPostById(_id))
        .then(res=>{
            console.log(JSON.stringify(res.payload.likes));
        //   const {likes} = res.data.post;
        console.log(" res likes "); 
        console.log(res.likes);
        
            if( isPostLikedByUser(res.payload.likes?.likedBy,username))  {
                console.log(" Dislike "+_id);
                dispatch(dislikePost(_id))
            }
            else {
                console.log(" Like");
                dispatch(likePost(_id))
            } 
        })
    }
    const isPostLikedByUser = (likedByData,username) => {
        for(let i=0;i<likedByData.length;i++) {
            console.log(likedByData[i]+" ** "+username);
            if(likedByData[i]==(username)) {
                return true;
            }
        }
        return false;
    }

    const commentPost= (postData) => {
        console.log(" inside comment post "+postData._id);
        dispatch(addPostComment(postData._id));
       /* console.log("inside comment post");
        setCommentModal(commentModal=> !commentModal);
        console.log(commentModal);
       <CommentModal/> */
    }

    const bookMarkPost = (postData) => {
        console.log(" inside bookmark post "+postData._id);
        dispatch(addBookmark(postData._id));
    }

    return(
        <div class="post"> 
              <img class="image-container postmodal-image" src="https://res.cloudinary.com/diirhxtse/image/upload/v1657112052/ThinkShare/Malvika_Iyer.jpg" />
              <span class="username">{postData.username}</span> 
              <span class="postTime">{postData.createdAt}</span>
              {!menuIcon && <div class="post-menu-icon-container" onClick={()=>{setDisplayMenuIcon(!menuIcon)}}>
                <i class="post-menu-icon fa fa-ellipsis"></i>
              </div>}
                {menuIcon && <PostDropdown postData={postData} setDisplayMenuIcon={setDisplayMenuIcon} class="post-dropdown" id="post-dropdown"/>}
                <div class="postContent">
                    {postData.content}
                    <div class="post-icons">
                        <i class="fa-regular fa-heart" onClick={()=>{reactPost(postData)}}> {postData.likes.likeCount}</i>
                        <i class="fa-regular fa-message" onClick={()=>{commentPost(postData)}}>{postData?.comments?.length}</i>
                        <i class="fa-regular fa-bookmark" onClick={()=>{bookMarkPost(postData)}}></i>
                    </div>
                </div>
        </div>
    )
}
