import {
    Button, Modal, ModalBody,
    ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure
  } from '@chakra-ui/react';
  import { TextField } from '../../../app/components/TextField';
  
  export const SignupDialog = ({ openSignupDialog, setOpenSignupDialog }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    const signupDialogClose = () => {
        setOpenSignupDialog(false);
    }
  
    return (
        openSignupDialog && <Modal isOpen={openSignupDialog} onClose={signupDialogClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign up</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TextField label="First Name" type="text" />
            <TextField label="Last Name" type="text" />
            <TextField label="Email Address"  type="email" />
            <TextField label="Password" placeholder="******" type="password" />
            <TextField label="Confirm Password" placeholder="******" type="password" />
           </ModalBody>
          <ModalFooter>
            <Button  colorScheme='blue'>Create new account</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  
    );
  };
  