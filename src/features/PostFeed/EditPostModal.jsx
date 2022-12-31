import {
  Button, Checkbox, EditableTextarea,Editable,EditablePreview, Modal, ModalBody,
  ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPostById } from './PostService';

export const EditPostModal= ({postData,isOpen,setEditModal,editModal}) => {
 const { _id,username,content} = postData;
 const {  onOpen, onClose } = useDisclosure();
 function onCloseFunc() {
  onClose();
  setEditModal(false);
}


 return (
 <Modal isOpen={editModal} onClose={onCloseFunc}>
  <ModalOverlay />
    <ModalContent>
      <ModalHeader>Edit Post</ModalHeader>
      <ModalCloseButton />
      {/**<Editable defaultValue='Take some chakra'>
<EditablePreview />
<EditableTextarea />
</Editable> **/}
      <ModalBody>
        {/*postData.username*/}
        {content}
      </ModalBody>
     </ModalContent>
  </Modal> 
 )
}