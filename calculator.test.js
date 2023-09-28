// Test: calculator.test.js 
const calculator = require('./calculator');

test('add 1 + 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
}
);
test('multiply 1 * 2 to equal 2', () => {
    expect(calculator.multiply(1, 2)).toBe(2);
});
test('divide 1 / 2 to equal 0.5', () => {
    expect(calculator.divide(1, 2)).toBe(0.5);
});
test('subtract 1 - 2 to equal -1', () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
});