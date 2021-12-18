import personalInfo from "../data/personalInfo.json";

const profile = (state = personalInfo, action) => {
    switch (action.type){
        case  'save-profile':
            return {
                ...state,
                ...
            }

        default:
            return(state);
    }
};

export default profile;