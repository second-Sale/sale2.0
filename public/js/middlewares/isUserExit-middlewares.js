import request from 'superagent';

export default store => next => action => {

    if (action.type === "ISUSEREXIT") {

        console.log("middlw:", action.name);
        request.post('/isUserExit')
            .send({name: action.name})
            .end((err, res) => {
                console.log("res", res.body);
                next({type:"isUser", userExit:res.body})
            })
    } else {
        next(action);
    }
}