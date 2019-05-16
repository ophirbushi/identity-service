const { JsonWebTokenError } = require('jsonwebtoken');
const { verify } = require('../jwt/jwt');

module.exports = async (req, res) => {
    const { token } = req.body;

    if (!token) return res.sendStatus(400);

    try {
        verify(token);
        res.sendStatus(200);
    } catch (err) {
        if (err instanceof JsonWebTokenError) return res.sendStatus(401);
        return res.sendStatus(500);
    }
};
