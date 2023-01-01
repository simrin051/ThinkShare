import { useEffect } from "react";

export default function useClickOutside(ref,handler) {
    useEffect(()=>{
        const listener = event=>{     
            const e1= ref?.current;
            if( e1 && !e1.contains(event.target)) {
              handler(event);
            }
            
        };
        document.addEventListener('click',listener)
       // document.addEventListener('mousedown',listener)
        //document.addEventListener('touchstart',listener)
        
        return()=>{
          document.removeEventListener('click',listener)
          // document.removeEventListener('mousedown',listener)
       //     document.removeEventListener('touchstart',listener)
        }
    },[ref,handler]);
}