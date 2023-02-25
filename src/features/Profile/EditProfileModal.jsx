import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay } from "@chakra-ui/react"
import { useReducer } from "react";
import { useDispatch } from "react-redux";
import { TextField } from "../../app/components/TextField";
import userIcon from '../../assets/UserIcon.jpg';
import { updateUser } from "../Authentication/UserService";
import { editProfileInitialState, profileReducer } from "./reducer/profileReducer";

export const EditProfileModal = ({ user, openEditProfileDialog, setEditProfile }) => {
    console.log(" user data "+JSON.stringify(user));
    const [formState, formDispatch] = useReducer(profileReducer, editProfileInitialState);
    const dispatch = useDispatch();

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
        dispatch(updateUser(formState))
        .then((user)=>{

        })
        .catch(err=>{
            console.log(err);
        })
    }

    return (
        openEditProfileDialog && <Modal isOpen={openEditProfileDialog}>
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalBody class="editProfileBody">
                    <div class="profile-img-background"></div>
                    <div class="profile-img">
                        <img id="profileimg" src={user.profilePhoto ? user.profilePhoto : userIcon} />
                        <label for="upload-profileimg">
                            <div class="profile-img-upload-btn">
                                <i class="fa-solid fa-arrow-up-from-bracket"></i>
                                <input type="file" name="photo" id="upload-profileimg" onChange={(e) => loadImage(e)} />
                            </div>
                        </label>
                    </div>
                    <div class="text-fields">
                        <TextField label="FirstName" type="text" defaultValue={user.firstName} onChange={(e) => formDispatch(
                            {
                                type: "PROFILE_FIRST_NAME",
                                payload: e.target.value
                            }
                        )} />
                        <TextField label="LastName" type="text" defaultValue={user.lastName} onChange={(e) => formDispatch(
                            {
                                type: "PROFILE_LAST_NAME",
                                payload: e.target.value
                            }
                        )} />
                        <TextField label="Bio" type="text" defaultValue={user?.bio ? user.bio : ""} onChange={(e) => formDispatch(
                            {
                                type: "PROFILE_BIO",
                                payload: e.target.value
                            }
                        )} />
                        <TextField label="Website URL" type="text" defaultValue={user.portfolioUrl} onChange={(e) => formDispatch(
                            {
                                type: "PROFILE_PORTFOLIIO_URL",
                                payload: e.target.value
                            }
                        )} />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={() => saveProfile()}>Save</Button>
                    <Button colorScheme='blue' onClick={() => setEditProfile(false)}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}