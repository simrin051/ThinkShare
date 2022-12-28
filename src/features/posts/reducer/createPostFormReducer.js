export const ACTIONS = {
    SET_CONTENT: "SET CONTENT"
}

export const initialStateOfPostForm = {
    content : ""
}

export  function postsReducer(state = initialStateOfPostForm, {payload , type}) {
    const {
		SET_CONTENT
	} = ACTIONS;

    switch (type) {
     case SET_CONTENT: 
        return { ...state, content: payload };
      default:
        return initialStateOfPostForm;
    }
}