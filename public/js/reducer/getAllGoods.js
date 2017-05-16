module.exports = (state = {goods: []}, action) => {
    switch (action.type) {
        case "GOODS":
            return {goods: action.goods};
        default:
            return state
    }
};