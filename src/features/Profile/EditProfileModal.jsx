import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay } from "@chakra-ui/react"
import { useReducer } from "react";
import { TextField } from "../../app/components/TextField";
import userIcon from '../../assets/UserIcon.jpg';
import { editProfileInitialState, profileReducer } from "./reducer/profileReducer";

export const EditProfileModal = ({ userData, openEditProfileDialog,setEditProfile }) => {

    const [formState, formDispatch] = useReducer(profileReducer, editProfileInitialState);

    const loadImage = (event) => {
        const profileImg = document.getElementById("profileimg");
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            profileImg.src = (reader.result)
            formDispatch(
                {
                    type: "PROFILE_IMAGE",
                    payload: reader.result
                }
            )
        };

        reader.readAsDataURL(file)
        event.target.value = "";
    }

    const saveProfile = () => {
        console.log("formState "+formState.name);
    }

    return (
        openEditProfileDialog && <Modal isOpen={openEditProfileDialog}>
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                    <div class="profile-img-background"></div>
                    <div class="profile-img">
                        <img id="profileimg" src={userData.profilePhoto ? userData.profilePhoto : userIcon} />
                        <label for="upload-profileimg">
                            <div class="profile-img-upload-btn">
                                <i class="fa-solid fa-arrow-up-from-bracket"></i>
                                <input type="file" name="photo" id="upload-profileimg" onChange={(e) => loadImage(e)} />
                            </div>
                        </label>
                    </div>
                    <div class="text-fields">
                    <TextField label="Name" type="text" defaultValue={userData.username} onChange={(e) =>formDispatch(
                {
                    type: "PROFILE_NAME",
                    payload: e.target.value
                }
            )}/>
                    <TextField label="Bio" type="text" defaultValue={userData?.bio?userData.bio: ""} onChange={(e)=> formDispatch(
                {
                    type: "PROFILE_BIO",
                    payload: e.target.value
                }
            )}/>
                    <TextField label="Website URL" type="text" defaultValue={userData.portfolioUrl} onChange={(e)=> formDispatch(
                {
                    type: "PROFILE_WEBSITEURL",
                    payload: e.target.value
                }
            )} />
            </div>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={()=>saveProfile()}>Save</Button>
                    <Button colorScheme='blue' onClick={()=>setEditProfile(false)}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}