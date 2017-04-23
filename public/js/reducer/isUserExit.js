module.exports = (state = {userExit: true}, action) => {
    switch (action.type) {
        case "isUser":
            console.log("reducer:",action.userExit);
            return {userExit: action.userExit};
        default:
            return state;
    }
};