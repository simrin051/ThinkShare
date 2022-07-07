import './NavBar.css';
import logo from '../assets/logo.jpg';
import { useState } from 'react';
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


export const NavBar = () => {
    const [postModal, setPostModal] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    function openPostModal() {
        onOpen();
        setPostModal(!postModal);
    }
    return (<div class="navbar-container">
        <div class="logo"><img src={logo} class="logo-icon" /></div>
        <ul class="sidebar-nav-links">
            <li class="sidebar-nav-link"><i class="sidebar-nav-icon fa-solid fa-house"></i>Home</li>
            <li class="sidebar-nav-link"><i class="sidebar-nav-icon fa-solid fa-hashtag"></i>Explore</li>
            <li class="sidebar-nav-link"><i class="sidebar-nav-icon fa-solid fa-bookmark"></i>BookMarks</li>
            <li class="sidebar-nav-link"><i class="sidebar-nav-icon fa-solid fa-user"></i>Profile</li>
        </ul>
        <button class="navbar-btn" onClick={openPostModal}>Think & Share</button>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader></ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <div class="postmodal">
                        <img class="image-container postmodal-image" src="https://res.cloudinary.com/diirhxtse/image/upload/v1657112052/ThinkShare/Malvika_Iyer.jpg" />
                        <input class="textarea postmodal-text-area" type="textbox" placeholder="What's happening"></input>
                      {/**   <textarea class="postmodal-text-area" placeholder="What's happening"></textarea>**/}
                    </div>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>Share</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </div>
    )
}