
const { isValid13digitsIsbn, removeHyphens, isValid10digitsIsbn } = require('./isbn.js');

test('takes 0-7167-0344-0 returns 0716703440', () => {
    expect(removeHyphens('0-7167-0344-0')).toBe('0716703440');
});

test('takes 0-7167-0344-0 returns true', () => {
    expect(isValid10digitsIsbn('0-7167-0344-0')).toBe(true);
});

test('takes 978-0-7167-0344-0 returns true', () => {
    expect(isValid13digitsIsbn('978-0-7167-0344-0')).toBe(true);
});