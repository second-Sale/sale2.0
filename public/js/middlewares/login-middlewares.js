import request from 'superagent';

export default store=>next=>action=> {
    if (action.type === 'LOGIN_USER') {
        alert("middl")

        request.post('/login')
            .send({name: action.text.name, password: action.text.password})
            .end((err, res)=> {
                console.log("login:",res.body)
                next({type: "CHECK_USER", checkUser: res.body});
            })
    } else {
        next(action);
    }
}