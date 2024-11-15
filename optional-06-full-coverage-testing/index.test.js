import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('sum adds two positive numbers', () => {
  assert.strictEqual(sum(2, 3), 5); // 2 + 3 = 5
});

test('sum returns 0 if the first parameter is not a number', () => {
  assert.strictEqual(sum('a', 3), 0); // invalid first parameter
});

test('sum returns 0 if the second parameter is not a number', () => {
  assert.strictEqual(sum(2, 'b'), 0); // invalid second parameter
});

test('sum returns 0 if one parameter is negative', () => {
  assert.strictEqual(sum(-2, 3), 0); // negative number as the first parameter
  assert.strictEqual(sum(2, -3), 0); // negative number as the second parameter
});

test('sum returns 0 if both parameters are negative', () => {
  assert.strictEqual(sum(-2, -3), 0); // both parameters are negative
});

test('sum returns correct sum for large numbers', () => {
  assert.strictEqual(sum(1000000, 2000000), 3000000); // large number test
});
