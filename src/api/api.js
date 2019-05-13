const login = require('./login');
const signup = require('./signup');

module.exports = (app) => {
    app.post('/login', login);
    app.post('/signup', signup);
};
