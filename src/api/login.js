const { User } = require('../db/db');
const { sign } = require('../jwt/jwt');
const { hashPassword } = require('../cryptography/cryptography');

module.exports = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) return res.sendStatus(400);

    try {
        const user = await User.findOne({ username });
        if (!user || !user.salt || !user.hash) return res.sendStatus(401);
        if (user.hash !== hashPassword(password, user.salt)) return res.sendStatus(401);
        const token = sign({ username });
        return res.send(token);
    } catch (err) {
        return res.sendStatus(500);
    }
};

