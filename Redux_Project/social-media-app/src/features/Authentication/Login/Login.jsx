import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react';

export const LoginDialog = ({ openLoginDialog, setOpenLoginDialog }) => {
  return (
    <Modal isOpen={openLoginDialog} onClose={!openLoginDialog}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Modal Title</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
          
      </ModalBody>
      <ModalFooter>
        <Button variant='ghost'>Secondary Action</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
  );
};
