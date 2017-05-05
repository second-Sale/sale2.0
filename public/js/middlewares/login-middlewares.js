import request from 'superagent';

export default store=>next=>action=> {
    if (action.type === 'LOGIN_USER') {
        request.post('/login')
            .send({name: action.text.name, password: action.text.password})
            .end((err, res)=> {
                // console.log('res:.cookie:', res.cookie('user'));
                next({type: "CHECK_USER", checkUser: res.body})
            })
    } else {
        next(action);
    }
}