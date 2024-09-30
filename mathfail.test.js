// math.test.js
const addition = require('./math');

// Ce test échouera car l'addition de 1 + 2 n'est pas égale à 4
test('addition de 1 + 2 doit être égal à 4 (incorrect)', () => {
  expect(addition(1, 2)).toBe(4);  // Ceci va échouer
});

