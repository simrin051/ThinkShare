import { useDispatch } from "react-redux";
import { getPosts } from "./features/PostFeed/PostService"

export const AppWrapper = ({children}) => {
    const dispatch = useDispatch();
   
    return <>{children}</>;
}