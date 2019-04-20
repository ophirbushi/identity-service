const { sayHi } = require('./index');

describe('sayHi', () => {
    it('should return "hi"', () => {
        expect(sayHi()).toBe('hi');
    });
});