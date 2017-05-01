const insert = require('../helpers/insertUser');

const insertUser = (data, callback) => {
    insert('user', data, callback);
};

module.exports = insertUser;