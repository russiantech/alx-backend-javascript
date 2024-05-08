export default function appendToEachArrayValue(array, appendString) {
  //changed to es6 syntax
  const newArray = [];
  for (const idx of array) {
    newArray.push(appendString + idx);
  }
  return newArray;
}
