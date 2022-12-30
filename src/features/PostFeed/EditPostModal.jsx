import {
    Button, Checkbox, Modal, ModalBody,
    ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure
  } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPostById } from './PostService';
  
export const EditPostModal= ({_id,content}) => {
    const dispatch = useDispatch();
    let postData = "";
    useEffect(() => {
        dispatch(fetchPostById(_id))
        .then(res=>{
           postData = (res.payload)
           console.log(" Post Data "+JSON.stringify(postData));
           console.log(" post data content "+postData.content);
        });
       
    })

   return (
    <Modal isOpen="true">
    <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Post</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          AA{content}
        </ModalBody>
       </ModalContent>
    </Modal>
   )
}