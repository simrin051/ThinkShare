import {
  Button, Checkbox, Modal, ModalBody,
  ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure
} from '@chakra-ui/react';
import { TextField } from '../../../app/components/TextField';

export const LoginDialog = ({ openLoginDialog, setOpenLoginDialog }) => {
  
  const loginDialogClose = () => {
    setOpenLoginDialog(false);
  }

  return (
    openLoginDialog && <Modal isOpen={openLoginDialog} onClose={loginDialogClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Log In</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <TextField label="Email Address" type="email" />
          <TextField label="Password" placeholder="******" type="password" />
          <Checkbox>Remember me</Checkbox>
        </ModalBody>
        <ModalFooter>
          <Button  colorScheme='blue' mr={3}>Log In</Button>
          <Button  colorScheme='blue'>Log In as guest</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>

  );
};
