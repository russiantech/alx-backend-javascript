const assert = require('assert');
const calculateNumber = require('./0-calcul'); // Import the function to be tested

describe('calculateNumber', () => {
  // Test case 1: Floating point whole numbers should sum correctly
  it('should sum floating point whole numbers correctly', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3); // Assert the sum of 1.0 and 2.0 is 3
  });

  // Test case 2: Rounding down b's floating point fractional number should result in correct sum
  it('should round down b\'s floating point fractional number correctly', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3); // Assert the sum of 1.0 and 2.4 is 3 after rounding down
  });

  // Test case 3: Rounding down both a and b's floating point fractional numbers should result in correct sum
  it('should round down both a and b\'s floating point fractional numbers correctly', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3); // Assert the sum of 1.4 and 2.4 is 3 after rounding down both
  });

  // Test case 4: Rounding down a's floating point fractional number should result in correct sum
  it('should round down a\'s floating point fractional number correctly', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3); // Assert the sum of 1.4 and 2.0 is 3 after rounding down a
  });

  // Test case 5: Rounding up b's floating point fractional numbers should result in correct sum
  it('should round up b\'s floating point fractional numbers correctly', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4); // Assert the sum of 1.0 and 2.5 is 4 after rounding up b
  });

  // Test case 6: Rounding up both a and b's floating point fractional numbers should result in correct sum
  it('should round up both a and b\'s floating point fractional numbers correctly', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6); // Assert the sum of 2.6 and 2.5 is 6 after rounding up both
  });

  // Test case 7: Rounding up a's floating point fractional numbers should result in correct sum
  it('should round up a\'s floating point fractional numbers correctly', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5); // Assert the sum of 2.6 and 2.0 is 5 after rounding up a
  });

  // Test case 8: Rounding down both a and b floating point fractional numbers with trailing 9's should result in correct sum
  it('should round down both a and b floating point fractional numbers with trailing 9\'s correctly', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5); // Assert the sum of 2.499999 and 3.499999 is 5 after rounding down both with trailing 9's
  });
});
