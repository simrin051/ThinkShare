export const editProfileInitialState = {
    bio: "",
    name: "",
    websiteurl: "",
    profileImage: ""
}

export function profileReducer(state = editProfileInitialState, { payload, type }) {
  
    switch (type) {
        case "PROFILE_BIO":
            return { ...state, bio: payload };
        case "PROFILE_NAME":
            return { ...state, name: payload };
        case "PROFILE_WEBSITEURL":
            return { ...state, websiteurl: payload };
        case "PROFILE_IMAGE":
            return { ...state, profileImage: payload };
        default:
            return editProfileInitialState;
    }
}