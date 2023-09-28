// Description: Test cases for caesarCipher.js

const caesarCipher = require('./caesarCipher');

test('shifts letters by specified amount', () => {
  expect(caesarCipher('hello', 3)).toBe('khoor');
});

test('wraps around the alphabet', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('ignores punctuation', () => {
  expect(caesarCipher('hello, world!', 3)).toBe('khoor, zruog!');
});

test('handles negative shifts', () => {
  expect(caesarCipher('hello', -3)).toBe('ebiil');
});

test('handles shifts greater than 26', () => {
  expect(caesarCipher('hello', 29)).toBe('khoor');
});