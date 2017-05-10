import request from 'superagent';

export default store => next => action => {
    if (action.type === "PUBLISH_GOODS") {
        console.log("middlw:", action.text);
        request.post('/publish')
            .send({goodsName: action.text.goodsName,user:action.text.user})
            .end((err, res) => {
                console.log("res", res.body)
            })
    } else {
        next(action);
    }
}