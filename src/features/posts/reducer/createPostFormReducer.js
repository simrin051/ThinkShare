export const ACTIONS = {
    SET_CONTENT: "SET CONTENT"
}

export const initialStateOfPostForm = {
    content : ""
}

export  function postsReducer(state = initialStateOfPostForm, {payload , type}) {
    console.log("inside posts reducer");
    const {
		SET_CONTENT
	} = ACTIONS;

    switch (type) {
     case SET_CONTENT: 
        console.log("inside set content");
        return { ...state, content: payload.content };
      default:
        return state
    }
}