const greet = require('./greet');
const login = require('./login');
const signup = require('./signup');
const authenticate = require('./authenticate');

module.exports = (app) => {
    app.get('/', greet);
    app.post('/api/v1/login', login);
    app.post('/api/v1/signup', signup);
    app.post('/api/v1/authenticate', authenticate);
};
