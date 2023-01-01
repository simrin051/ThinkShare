import {
  Button,
  Editable, EditablePreview, EditableTextarea, Modal, ModalBody,
  ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, useDisclosure
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { editPost } from './PostService';

export const EditPostModal= ({postData,isOpen,setEditModal,editModal}) => {
 const { _id,username,content} = postData;
 const {  onOpen, onClose } = useDisclosure();
 const dispatch = useDispatch();
 let updating = false; 
 let inputValue = "";

 function onCloseFunc() {
  onClose();
  setEditModal(false);
}

function updatePost() {
  dispatch(editPost({postId: postData._id,postData: inputValue}));
  setEditModal(false);
}


let handleInputChange = (e) => {
  inputValue = e.target.value;
 // setEditMode(true)
  updating = true;
 }

 return (
 <Modal isOpen={editModal} onClose={onCloseFunc}>
  <ModalOverlay />
    <ModalContent>
      <ModalHeader>Edit Post</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
      <Textarea defaultValue={postData.content} onChange={()=>handleInputChange}/>
      </ModalBody>
      <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={updatePost}>Post</Button>
      <Button colorScheme='blue' mr={3} onClick={onCloseFunc}>Cancel</Button>
      </ModalFooter>
    </ModalContent>
  </Modal> 
 )
}