import '../NavBar.css';
import './Home/Home.css';
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
import {useDispatch, useSelector} from 'react-redux';

export const PostModal = (props) => {
    function closePostModal() {
        props.modalOpen(false);
    }
    const dispatch = useDispatch();
    const inputValue = useSelector(state => state.sample.value)
    
    const handleChange = (e) => {
      console.log("inside handle change");
      dispatch(createPost(e.target.value))
    }

    const { isOpen, onOpen, onClose } = useDisclosure();
    return(  <>
        <button class="navbar-btn" onClick={onOpen}>Think & Share</button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader></ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <div class="postmodal">
        <img  class="image-container postmodal-image" src="https://res.cloudinary.com/diirhxtse/image/upload/v1657112052/ThinkShare/Malvika_Iyer.jpg"/>
        <textarea class="postmodal-text-area" placeholder="What's happening AA" onChange={handleChange}></textarea>
        </div> 
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}  onClick={onClose}>Share</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>/**        <button class="share-btn" onClick={closePostModal}>Share</button> 
</div>**/)
}