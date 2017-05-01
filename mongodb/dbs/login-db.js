const login = require('../helpers/login');

const loginUser = (data, callback) => {
    login('user', data, callback);
};

module.exports =loginUser;