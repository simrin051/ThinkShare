export const editProfileInitialState = {
    firstName: "",
    lastName: "",
    portfolioUrl: "",
    profilePhoto: "",
    bio: "",
}

export function profileReducer(state = editProfileInitialState, { payload, type }) {
  
    switch (type) {
        case "PROFILE_BIO":
            return { ...state, bio: payload };
        case "PROFILE_FIRST_NAME":
            return { ...state, firstName: payload };
        case "PROFILE_LAST_NAME":
            return { ...state, lastName: payload };
        case "PROFILE_PORTFOLIIO_URL":
            return { ...state, portfolioUrl: payload };
        case "PROFILE_IMAGE":
            return { ...state, profilePhoto: payload };
        default:
            return editProfileInitialState;
    }
}