import {
  Button,
  Modal, ModalBody,
  ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay,
  useDisclosure
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPostComment } from './CommentService';
import './Modal.css';
import { setPosts } from './postSlice';
import { getPosts } from './PostService';

export const CommentModal = ({ postData, setCommentModal }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  let posts = useSelector((state) => {
    return state.post.posts;
})
  const postComment = (comment, id) => {
    dispatch(addPostComment({id, comment}));
    dispatch(getPosts());
  }

  const closeModal = () => {
    setCommentModal(false);
    onClose();
  }

  return (
    <Modal isOpen="true" onClose={closeModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <img class="image-container postmodal-image" src="https://res.cloudinary.com/diirhxtse/image/upload/v1657112052/ThinkShare/Malvika_Iyer.jpg" />
          <div class="v-line"></div>
          <div class="comment-post">
            <span class="username">username posttime</span>
            <div class="postContent">
              DEF
            </div>
          </div>
          <img class="image-container postmodal-image" src="https://res.cloudinary.com/diirhxtse/image/upload/v1657112052/ThinkShare/Malvika_Iyer.jpg" />
          <div class="comment-post">
            <textarea class="textarea-comment" placeholder="What's happening" onChange={(e) => setComment(e.target.value)}>
            </textarea>
          </div>
          <div class="reply-container-footer"></div>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' disabled={comment.length==0} onClick={() => postComment(comment, postData._id)}>Post</Button>
          {/**
          <Box as="button"
            disabled
            fontWeight="semibold"
            py={2}
            px={4}
            rounded="md"
            color="white"
            bg="blue.500"
            _active={{ bg: "blue.700" }}
            _focus={{ boxShadow: "outline" }}
            _disabled={{ opacity: 0.6 }}>Reply</Box>
        **/}
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}