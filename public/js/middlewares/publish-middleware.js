import request from 'superagent';

export default store => next => action => {
    if (action.type === "PUBLISH_GOODS") {
        console.log("middlw:", action.text);
        request.post('/publish')
            .send({
                user: action.text.user,
                goodsName: action.text.goodsName,
                goodsDescript: action.text.goodsDescript,
                goodsPrice: action.text.goodsPrice,
                goodsCount: action.text.goodsCount,
                goodsContact: action.text.goodsContact
            })
            .end((err, res) => {
                console.log("res", res.body)
            })
    } else {
        next(action);
    }
}