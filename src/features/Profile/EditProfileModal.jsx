import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay } from "@chakra-ui/react"
import { TextField } from "../../app/components/TextField";
import userIcon from '../../assets/UserIcon.jpg';

export const EditProfileModal = ({userData, openEditProfileDialog}) => {
   
    return (
        openEditProfileDialog && <Modal isOpen={openEditProfileDialog}>
            <ModalOverlay />
             <ModalContent>
             <ModalCloseButton />
                <ModalBody>
                <div class="profile-img-background"></div>
                <div class="profile-img">
                    <img  src={userData.profilePhoto?userData.profilePhoto: userIcon}/>
                        <label for="upload-profileimg">
                        <div class="profile-img-upload-btn">
                        <i class="fa-solid fa-arrow-up-from-bracket"></i>
                        </div>
                        </label>
                        <input type="file" name="photo" id="upload-profileimg" />
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