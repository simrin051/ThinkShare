import { tokenKey, userNameKey } from "./constants";
import axios from "axios";

export const setAuthCookies = (cookieObj) => {    
    localStorage.setItem(tokenKey,cookieObj.encodedToken);
    localStorage.setItem(userNameKey,cookieObj.username);
}

export const getCookie = (cookieKey) => {
   return localStorage.getItem(cookieKey);
}

export const setAuthorizationHeaders = () => {
    axios.defaults.headers.common['authorization'] = getCookie(tokenKey);
}