module.exports = (state = {checkUser: " ",isLogin:false, user:" "}, action)=> {
    switch (action.type) {
        case "CHECK_USER":
            return {checkUser: action.checkUser.tag,isLogin:action.checkUser.isLogin,user:action.checkUser.user};
        default:
            return state;
    }
};