const calculateNumber = (type, a, b) => {
  // Round the numbers before performing calculations
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  // Perform calculations based on the type
  if (type === 'SUM') {
    return roundedA + roundedB;
  }
  if (type === 'SUBTRACT') {
    return roundedA - roundedB;
  }
  if (type === 'DIVIDE') {
    // Check if divisor is zero to avoid division by zero
    return roundedB === 0 ? 'Error' : roundedA / roundedB;
  }
  
  // Default case if type is unrecognized
  return 0;
};

module.exports = calculateNumber;
