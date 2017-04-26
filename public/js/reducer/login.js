module.exports=(state={checkUser:false},action)=>{
    switch (action.type){
        case "CHECK_USER":
            return{checkUser:action.checkUser};
        default:
            return state;
    }
};