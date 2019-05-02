const { BehaviorSubject } = require('rxjs');

const create = () => ({
    db: new BehaviorSubject(null)
});
