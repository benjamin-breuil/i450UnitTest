// math.test.js
const addition = require('./math');

test('addition de 1 + 2 doit être égal à 3', () => {
  expect(addition(1, 2)).toBe(3);
});

