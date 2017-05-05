module.exports = (state = {checkUser: " "}, action)=> {
    switch (action.type) {
        case "CHECK_USER":
            return {checkUser: action.checkUser};
        default:
            return state;
    }
};