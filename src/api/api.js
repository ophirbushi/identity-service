const { User } = require('../db/db');

module.exports = (app) => {

    app.post('/login', async (req, res, next) => {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.sendStatus(400);
        }

        try {
            const user = await User.findOne({ username, password });

            if (!user) {
                return res.sendStatus(401);
            }

            return res.send(user);
        } catch (err) {
            return res.sendStatus(500);
        }
    });

    app.post('/signup', async (req, res, next) => {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.sendStatus(400);
        }

        try {
            const user = await User.findOne({ username });

            if (user) {
                return res.status(409).send('user already exists');
            }

            await User.create({ username, password });

            return res.sendStatus(200);
        } catch (err) {
            return res.sendStatus(500);
        }
    });
};
