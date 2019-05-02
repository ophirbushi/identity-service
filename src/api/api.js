const status = require('http-status');
const { create } = require('../db/db');

module.exports = (app, tools) => {
    app.get('/authenticate', (req, res, next) => {
        const db = create();
        res.send(db);
    });
};
