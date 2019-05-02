const levelup = require('levelup');
const leveldown = require('leveldown');

const create = () => levelup(leveldown('./mydb'));

module.exports = { create };

// db.put('test', '123')
//     .then(console.log)
//     .catch(console.error);
