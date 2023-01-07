import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay } from "@chakra-ui/react"
import { TextField } from "../../app/components/TextField";
import userIcon from '../../assets/UserIcon.jpg';

export const EditProfileModal = ({userData, openEditProfileDialog}) => {
    
    const loadImage = (event) => {
        const profileImg = document.getElementById("profileimg");
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function(e) {
          profileImg.src=(reader.result)
        };
      
        reader.readAsDataURL(file)
        event.target.value = "";
    }

    return (
        openEditProfileDialog && <Modal isOpen={openEditProfileDialog}>
            <ModalOverlay />
             <ModalContent>
             <ModalCloseButton />
                <ModalBody>
                <div class="profile-img-background"></div>
                <div class="profile-img">
                    <img id="profileimg" src={userData.profilePhoto?userData.profilePhoto: userIcon}/>
                        <label for="upload-profileimg">
                        <div class="profile-img-upload-btn">
                            <i class="fa-solid fa-arrow-up-from-bracket"></i>
                        <input type="file" name="photo" id="upload-profileimg" onChange={(e)=>loadImage(e)} />
                        
                        </div>
                        </label>
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