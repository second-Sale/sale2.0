module.exports = (state = {userExit: false}, action) => {
    switch (action.type) {
        case "isUser":
            console.log("reducer:",action.userExit);
            return {userExit: action.userExit};
        default:
            return state;
    }
};