import axios from "axios";
import { tokenKey, userNameKey } from "./constants";

let loggedInUser = {};

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

export const setLoggedInUser = (user) => {
    loggedInUser = user;
}

export const getLoggedInUser = () =>{
    return loggedInUser;
}

export const loggedInUserName = () => {
    return loggedInUser.username;     
}