function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0) {
    return '';
  }
  const result = [];
  set.forEach((value) => {
    if (value.startsWith(startString) && typeof value === 'string') {
      result.push(value.slice(startString.length));
    }
  });
  return result.join('-');
}

export default cleanSet;
