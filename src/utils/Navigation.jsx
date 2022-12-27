import { useNavigate } from "react-router-dom";

export function Navigation(path) {
    const navigate = useNavigate();  
    navigate(path);    
}