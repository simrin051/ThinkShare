import './NavBar.css';
import logo from '../../assets/logo.jpg';
import { useReducer, useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';
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
import  {createPost}  from '../PostFeed/postSlice';
import {useDispatch} from 'react-redux';
import { ACTIONS } from '../posts/reducer/createPostFormReducer';
import {postsReducer} from  '../posts/reducer/createPostFormReducer';
import {initialStateOfPostForm} from  '../posts/reducer/createPostFormReducer';

export const NavBar = () => {
    const {SET_CONTENT}  = ACTIONS;
    const [postModal, setPostModal] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();
    const [formState, formDispatch] = useReducer(
		postsReducer,
		initialStateOfPostForm,
	);

    function openPostModal() {
        onOpen();
        setPostModal(!postModal);
    }
    const postButtonClicked = async () => {
        const newPostDetails = {
            content: formState.content
        }
        dispatch(createPost(newPostDetails));
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
            <img class="image-container footer-postmodal-image" src="https://res.cloudinary.com/diirhxtse/image/upload/v1657112052/ThinkShare/Malvika_Iyer.jpg" />
            <i class="logout-icon fa fa-ellipsis"></i>
        </div>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader></ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <div class="postmodal">
                        <img class="image-container postmodal-image" src="https://res.cloudinary.com/diirhxtse/image/upload/v1657112052/ThinkShare/Malvika_Iyer.jpg" />
                        <input class="textarea postmodal-text-area" type="textbox" placeholder="What's happening" onChange={e=>formDispatch({type: SET_CONTENT,payload: e.target.value })}></input>
                    </div>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={postButtonClicked}>Share</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </div>
    )
}