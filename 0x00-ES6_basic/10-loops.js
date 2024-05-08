// changed to es6 syntax
export default function appendToEachArrayValue(array, appendString) {
  let newArray = [];
  for (let idx of array) {
    newArray.push(appendString + idx);
  }
  return newArray;
}
