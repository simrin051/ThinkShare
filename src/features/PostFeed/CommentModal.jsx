import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';

export const CommentModal = () => {
    console.log(" inside comment modal ");
    return(
        <Modal>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader></ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <div class="postmodal">
                    <img class="image-container postmodal-image" src="https://res.cloudinary.com/diirhxtse/image/upload/v1657112052/ThinkShare/Malvika_Iyer.jpg" />
                    <textarea  class="textarea postmodal-text-area" placeholder="What's happening"></textarea>
                </div>
            </ModalBody>
            <ModalFooter>               
            </ModalFooter>
        </ModalContent>
    </Modal>
    )
}