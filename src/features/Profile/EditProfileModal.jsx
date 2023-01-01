import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay } from "@chakra-ui/react"
import { TextField } from "../../app/components/TextField"

export const EditProfileModal = ({userData, openEditProfileDialog}) => {
    console.log("inside edit profile modal");
    return (
        openEditProfileDialog && <Modal isOpen={openEditProfileDialog}>
            <ModalOverlay />
             <ModalContent>
             <ModalCloseButton />
                <ModalBody>
                <div class="profile-img-background"></div>
                    <div class="profile-img">
                        <img  src={userData.profilePhoto}/>
                    </div>
                    <TextField label="Name" type="text" value={userData.username} />
                    <TextField label="Bio" type="text" value={userData.bio} />  
                    <TextField label="Website URL" type="text" value={userData.portfolioUrl}/>
                </ModalBody>
                <ModalFooter>
                </ModalFooter> 
            </ModalContent> 
        </Modal>
    )
}