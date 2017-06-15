module.exports = (state = {image: ""}, action)=> {
    switch (action.type) {
        case "UPLOAD_IMAGE":
            return {image: action.text};
        default:
            return state;
    }
};