const crypto = require('crypto');

module.exports = {
    port: 8080,
    DB_URI: process.env.DB_URI,
    jwtExpiresIn: '5h',
    jwtSecret: process.env.jwtSecret || crypto.randomBytes(32).toString('hex')
};
