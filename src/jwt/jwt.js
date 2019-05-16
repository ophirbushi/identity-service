const { jwtSecret, jwtExpiresIn } = require('../config/config');
const jwt = require('jsonwebtoken');

const sign = ({ username }) => jwt.sign({}, jwtSecret, { subject: username, expiresIn: jwtExpiresIn });

const verify = token => jwt.verify(token, jwtSecret);

module.exports = {
    sign,
    verify
};
