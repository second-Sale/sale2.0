import request from 'superagent';

export default store => next => action => {
    if (action.type === "REGIST") {
        console.log("middlw:",action.text.name);
        request.post('/regist')
            .send({name: action.text.name, password: action.text.password})
            .end((err, res) => {
                console.log("res",res.body)
            })
    }else{
        next(action);
    }
}