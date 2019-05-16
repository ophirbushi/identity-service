const crypto = require('crypto');

const generateSalt = () => crypto.randomBytes(32).toString('base64');

const hashPassword = (password, salt) => {
    const hashObj = crypto.createHash('sha256');
    hashObj.update(`${salt}${password}`);
    return hashObj.digest('base64');
};

module.exports = {
    generateSalt,
    hashPassword
};
