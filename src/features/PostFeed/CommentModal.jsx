import {
  Button, Modal, ModalBody,
  ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, useDisclosure
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addPostComment } from './CommentService';
import './Modal.css';

let comment = "";

const setComment = (e) => {
  comment = e.target.value;
}


export const CommentModal = ({postData,setCommentModal}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const postComment = (id) => {
    dispatch(addPostComment(id,comment))
  }

  const closeModal = () => {
    setCommentModal(false);
    onClose();
  }
  
    return(
        <Modal isOpen="true" onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader></ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div class="postedUsername">
                {postData.username}
              </div>
              <div class="post">
                    {postData.content}  
              </div>
              <div class="reply">
              <h2>Replying</h2>
           
        <Textarea onChange={(e)=>setComment(e,postData._id)}/>  
            <div class="comment-btns">
                <Button colorScheme='blue' onClick={()=>postComment(postData._id)}>Post</Button>
                <Button colorScheme='blue' onClick={()=>closeModal()}>Cancel</Button>
            </div>
              </div>
            </ModalBody>
            <ModalFooter>               
            </ModalFooter>
        </ModalContent>
    </Modal>
    )
}