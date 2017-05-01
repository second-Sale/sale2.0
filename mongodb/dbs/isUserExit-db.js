const isUser = require('../helpers/isUserExit');

const isUserExit = (data, callback) => {
    isUser('user', data, callback);
};

module.exports = isUserExit;