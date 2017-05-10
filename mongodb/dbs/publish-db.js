const insert= require('../helpers/insertGoods');

const insertGoods = (data, callback) => {
    insert('goods', data, callback);
};

module.exports =insertGoods;