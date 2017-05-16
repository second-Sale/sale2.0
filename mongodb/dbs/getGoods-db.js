const getGoods = require('../helpers/getGoods');

const getGood = (data, callback)=>{
    getGoods("goods",data, callback)
};

module.exports = getGood;