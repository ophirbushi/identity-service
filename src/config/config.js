const crypto = require('crypto');

module.exports = {
    port: 8080,
    DB_URI: 'mongodb://localhost:27017/identity-service',
    jwtSecret: process.env.jwtSecret || crypto.randomBytes(32).toString('hex')
};
