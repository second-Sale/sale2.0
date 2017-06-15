import request from 'superagent'

export default store=>next=>action=> {
    if (action.type === "GET_ALL_GOODS") {
        request.post('/getAllGoods')
            .end((err, res) => {
                next({type:"GOODS",goods:res.body})
            });
    } else {
        next(action)
    }
}