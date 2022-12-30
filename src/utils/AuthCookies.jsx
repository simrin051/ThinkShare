import { tokenKey, userNameKey } from "./constants";

export const setAuthCookies = (cookieObj) => {    
    localStorage.setItem(tokenKey,cookieObj.encodedToken);
    localStorage.setItem(userNameKey,cookieObj.username);
}

export const getCookie = (cookieKey) => {
   return localStorage.getItem(cookieKey);
}