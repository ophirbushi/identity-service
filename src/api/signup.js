const { User } = require('../db/db');
const { sign } = require('../jwt/jwt');

module.exports = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) return res.sendStatus(400);

    try {
        const user = await User.findOne({ username });
        if (user) return res.status(409).send('user already exists');
        await User.create({ username, password });
        const token = sign({ username });
        return res.send(token);
    } catch (err) {
        return res.sendStatus(500);
    }
};
