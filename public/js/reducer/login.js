<<<<<<< HEAD
module.exports=(state={checkUser:false},action)=>{
    switch (action.type){
        case "CHECK_USER":
            return{checkUser:action.checkUser};
=======
module.exports = (state = {checkUser: false}, action)=> {
    switch (action.type) {
        case "CHECK_USER":
            return {checkUser: action.checkUser};
>>>>>>> 49ba19b8d8442de8a975e27c728b04f1349fd34f
        default:
            return state;
    }
};