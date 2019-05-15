const { jwtSecret } = require('../config/config');
const jwt = require('jsonwebtoken');

const sign = ({ username }) => jwt.sign({}, jwtSecret, { subject: username });

const verify = token => jwt.verify(token, jwtSecret);

module.exports = {
    sign,
    verify
};
