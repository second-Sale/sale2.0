import request from 'superagent';

export default store=>next=>action=> {
    if (action.type === 'LOGOUT') {
        request.post('/logOut')
            .end((err, res)=> {
                console.log("login-middle:",res.body);
                next({type: "CHECK_USER", checkUser: res.body});
            })
    } else {
        next(action);
    }
}