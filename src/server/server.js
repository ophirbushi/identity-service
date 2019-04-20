const express = require('express');
const helmet = require('helmet');
const api = require('../api/api');

const start = (options) => {
    const app = express();
    app.use(helmet());
    api(app, options);
    return app.listen(options.port);
};

module.exports = { start };
