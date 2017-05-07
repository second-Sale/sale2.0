import request from 'superagent';

export default store=>next=>action=> {
    if (action.type === 'LOGIN_USER') {
        request.post('/login')
            .send({name: action.text.name, password: action.text.password})
            .end((err, res)=> {
                console.log("login-middle:",res.body);
                next({type: "CHECK_USER", checkUser: res.body});
                // next({type: "IS_LOGIN",isLogin: res.body.isLogin,user:res.body.user})
            })
    } else {
        next(action);
    }
}