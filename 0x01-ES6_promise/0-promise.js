// 0-promise.js
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // For now, we can just resolve the promise
    resolve('Success');
  });
}
