import { FollowRequests } from "../FollowRequests/FollowRequests"
import { NavBar } from "../NavBar/NavBar"

export const BookMarks = (data) => {
    
    return (
        <div class="home-container"><NavBar/>
        <div class="bookmark-section">
        <h2 class="center subheading">Bookmarks</h2>
        <h2 class="message">There are no book marks, Please bookmark to view them here</h2>
        </div>
        <FollowRequests/></div>)
}