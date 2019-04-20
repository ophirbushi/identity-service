const status = require('http-status');

module.exports = (app) => {
    app.get('/authenticate/:domain', (req, res, next) => {
        Promise.resolve()
            .then(() => {
                res.status(status.OK).json({
                    message: 'received a request',
                    params: req.params
                });
            })
            .catch(next);
    });
};
