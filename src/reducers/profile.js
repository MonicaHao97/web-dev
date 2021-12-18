import personalInfo from "../data/personalInfo.json";

const profile = (state = personalInfo, action) => {
    switch(action.type) {
        case 'edit-profile':
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default profile;