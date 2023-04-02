import { CircularProgress } from '@chakra-ui/react';
import { useEffect, useReducer, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgressWithLabel } from '../../app/components/CircularProgressWithLabel';
import { ACTIONS, initialStateOfPostForm, postsReducer } from '../posts/reducer/createPostFormReducer';
import { Post } from './Post';
import './PostFeed.css';
import { createPost } from './PostService';
import { setPosts } from './postSlice';


export const PostFeed = () => {
    const { SET_CONTENT } = ACTIONS;
    const postMaxLength = 100;
    let posts = [];
    const ref = useRef();
    const [isOpen, setIsOpen] = useState(false);
    //  useClickOutside(ref,()=>setIsOpen(false));
    const [postContentLength, setPostContentLength] = useState(0);
    const dispatch = useDispatch();
    const [formState, formDispatch] = useReducer(
        postsReducer,
        initialStateOfPostForm,
    );


    posts = useSelector((state) => {
        return state.post.posts;
    })

    useEffect(() => {
        /*
        const handleClickOutside = (event) => {
            if (ref && ref.current && !ref.current.contains(event.target)) {
                setIsOpen(false);
            }
          };
          document.addEventListener("mousedown", handleClickOutside);
          sortPostsBasedOnUpdatedTime();
          }, [ref]);
          */
    }, [posts]);

    const sortPostsBasedOnLikes = () => {
        posts = [...posts].sort((a, b) => {
            return b.likes.likeCount - a.likes.likeCount;
        });
        dispatch(setPosts(posts));
    }

    const sortPostsBasedOnUpdatedTime = () => {
        posts = [...posts].sort((a, b) => {
            return Date.parse(b.updatedAt) - Date.parse(a.updatedAt);
        });
        dispatch(setPosts(posts));
    }

    const sortPostsBasedOnCreatedTime = () => {
        posts = [...posts].sort((a, b) => {
            return Date.parse(b.createdAt) - Date.parse(a.createdAt);
        });
        dispatch(setPosts(posts));
    }

    const postButtonClicked = async () => {
        const postData = {
            content: formState.content
        }
        dispatch(createPost(postData));
        formDispatch({ type: SET_CONTENT, payload: "" })
        setPostContentLength(0);
    }

    const setTextCalculateProgress = (e) => {
        setPostContentLength(e.target.value.length);
        formDispatch({ type: SET_CONTENT, payload: e.target.value })
    }

    return (<div class="post-container">
        {isOpen == true && <div class="dropdown" ref={ref}>
            <div class="option color-red"><i class="fa-solid fa-heart" onClick={() => sortPostsBasedOnLikes()}></i> See most liked broadcasts</div>
            <div class="option color-yellow"><i class="fa-solid fa-star-of-life" onClick={() => sortPostsBasedOnUpdatedTime()}></i>See latest broadcasts</div>
        </div>}
        {isOpen == false && <i class="fa-solid fa-bars menu-icon" onClick={() => { setIsOpen(true) }}></i>}
        <img class="image-container" src="https://res.cloudinary.com/diirhxtse/image/upload/v1657112052/ThinkShare/Malvika_Iyer.jpg" />
        <textarea class="postmodal-text-area" value={formState.content} maxLength={postMaxLength} placeholder="What's happening" onChange={e => setTextCalculateProgress(e)}>
        </textarea>
        <div class="actions-footer">
            {postContentLength > 0 && (postMaxLength - postContentLength > 10) ? (
                <CircularProgress
                    class="progress-icon"
                    size="2rem"
                    variant="determinate"
                    value={Math.round((postContentLength * 100) / postMaxLength)}
                />
            ) : (
                postContentLength > 0 && <CircularProgressWithLabel class="progress-icon" value={postMaxLength - postContentLength}>
                </CircularProgressWithLabel>)}
            <button class="share-btn" onClick={postButtonClicked} >Share</button>
        </div>
        <div class="postfeed">
            {posts && posts.length > 0 && posts.map((post) => {
                return <Post postData={post} />;
            })}
        </div>
    </div>)
}