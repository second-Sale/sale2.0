import request from 'superagent';

export default store => next => action => {
    if (action.type === "ISUSEREXIT") {
        console.log("middlw:", action.text.name);
        request.post('/isUserExit')
            .send({name: action.text.name})
            .end((err, res) => {
                console.log("res", res.body)
            })
    } else {
        next(action);
    }
}