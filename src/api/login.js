const { User } = require('../db/db');

module.exports = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) return res.sendStatus(400);

    try {
        const user = await User.findOne({ username, password });
        if (!user) return res.sendStatus(401);
        return res.send(user);
    } catch (err) {
        return res.sendStatus(500);
    }
};
