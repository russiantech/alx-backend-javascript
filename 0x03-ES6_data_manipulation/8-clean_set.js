export default function cleanSet(set, startString) {
  const setRet = [];
  if (startString === '' || typeof startString !== 'string') return '';
  set.forEach((v) => {
    if (typeof v === 'string' && v.startsWith(startString)) {
      setRet.push(v.slice(startString.length));
    }
  });
  return setRet.join('-');
}
