import './NavBar.css';
import logo from '../../assets/logo.jpg';
import React, { useReducer, useState } from 'react';
import { CircularProgress, CircularProgressLabel, useDisclosure } from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { createPost } from '../PostFeed/PostService';
import { useDispatch } from 'react-redux';
import { ACTIONS } from '../posts/reducer/createPostFormReducer';
import { postsReducer } from '../posts/reducer/createPostFormReducer';
import { initialStateOfPostForm } from '../posts/reducer/createPostFormReducer';
import { CircularProgressWithLabel } from '../../app/components/CircularProgressWithLabel';
import { LogoutDialog } from './LogoutDialog';

export const NavBar = () => {
    const { SET_CONTENT } = ACTIONS;
    const [logOutModal,setLogoutModal] = useState(false);
    const [postModal, setPostModal] = useState(false);
    const [postContentLength, setPostContentLength] = useState(0);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();
    const [formState, formDispatch] = useReducer(
        postsReducer,
        initialStateOfPostForm,
    );
    const postMaxLength = 100;

    function openPostModal() {
        onOpen();
        setPostModal(!postModal);
    }


    const postButtonClicked = async () => {
        const postData = {
            content: formState.content
        }
        dispatch(createPost(postData));
        setPostContentLength(0);
        onClose();
    }

    const setTextCalculateProgress = (e) => {
        setPostContentLength(e.target.value.length);
        formDispatch({ type: SET_CONTENT, payload: e.target.value })
    }

    function onCloseFunc() {
        setPostContentLength(0);
        onClose();
    }

    return (<div class="navbar-container">
        <div class="logo"><img src={logo} class="logo-icon" /></div>
        <ul class="sidebar-nav-links">
            <li class="sidebar-nav-link"><i class="sidebar-nav-icon fa-solid fa-house"></i>Home</li>
            <li class="sidebar-nav-link"><i class="sidebar-nav-icon fa-solid fa-hashtag"></i>Explore</li>
            <li class="sidebar-nav-link"><i class="sidebar-nav-icon fa-solid fa-bookmark"></i>BookMarks</li>
            <li class="sidebar-nav-link"><i class="sidebar-nav-icon fa-solid fa-user"></i><Link to="/profile">Profile</Link></li>
        </ul>
        <button class="navbar-btn" onClick={openPostModal}>Think & Share</button>
        <div class="nav-footer">
            <div class="user-container">
                <img class="image-container postmodal-image" src="https://res.cloudinary.com/diirhxtse/image/upload/v1657112052/ThinkShare/Malvika_Iyer.jpg" />
                <div class="user-details">
                    <h2>username</h2>
                    <h2>username</h2>
                </div>
                <i class="logout-icon fa fa-ellipsis" onClick={()=>setLogoutModal(!logOutModal)}></i>
            </div>
        </div>
        {logOutModal && <LogoutDialog></LogoutDialog>}
        <Modal isOpen={isOpen} onClose={onCloseFunc}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader></ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <div class="postmodal">
                        <img class="image-container postmodal-image" src="https://res.cloudinary.com/diirhxtse/image/upload/v1657112052/ThinkShare/Malvika_Iyer.jpg" />
                        <textarea maxLength={postMaxLength} class="textarea postmodal-text-area" placeholder="What's happening" onChange={e => { setTextCalculateProgress(e) }}></textarea>
                    </div>
                </ModalBody>

                <ModalFooter>
                    {postContentLength>0 && (postMaxLength - postContentLength > 10) ? (
                        <CircularProgress
                            size="2rem"
                            variant="determinate"
                            sx={{ marginRight: "1rem" }}
                            value={Math.round((postContentLength * 100) / postMaxLength)}
                        />
                    ) : (
                        postContentLength>0 && <CircularProgressWithLabel value={postMaxLength - postContentLength}>
                        </CircularProgressWithLabel>)}
                    <Button colorScheme='blue' mr={3} onClick={postButtonClicked}>Share</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </div>
    )
}