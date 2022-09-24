import './PostDropdown.css';
import {useRef} from "react";
import { useEffect } from 'react';


export const PostDropdown = (props) => {
    const ref = useRef();
   
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (!ref.current.contains(event.target)) {
            console.log("outside click");
            props.setDisplayMenuIcon(false);
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
      }, [ref]);

    return (
        <div ref={ref} class="menu-dropdown">
           <div class="menu-option"> <i class="fa fa-trash-can"></i>Delete the post</div>
           <div class="menu-option"><i class="fa-sharp fa-solid fa-pen-to-square"></i>Edit the post</div>
        </div>
    )
}