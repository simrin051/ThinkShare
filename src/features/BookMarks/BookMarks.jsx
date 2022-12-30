import { useDispatch, useSelector } from "react-redux";
import { getBookMarks } from "../Authentication/UserService";
import { FollowRequests } from "../FollowRequests/FollowRequests"
import { NavBar } from "../NavBar/NavBar"
import { Post } from "../PostFeed/Post";

export const BookMarks = (data) => {
    const bookmarks = useSelector((state) => {
        return state.auth.bookmarks
    })
   
    return (
        <div class="home-container"><NavBar/>
        <div class="bookmark-section">
        <h2 class="center subheading">Bookmarks</h2>
        {bookmarks && bookmarks.length>0 && bookmarks.map((post) => {
            return <Post postData={post} />;
        })}
        {bookmarks.length==0 && <h2 class="message">There are no book marks, Please bookmark to view them here</h2>}
        </div>
        <FollowRequests/></div>)
}