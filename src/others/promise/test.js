console.log('sync1'); // 1
setTimeout(() => {
  console.log('setTimeout1'); // 5
}, 0);
const promise = new Promise(((resolve) => {
  setTimeout(() => {
    console.log('setTimeoutPromise'); // 6
  }, 0);
  console.log('promise'); // 2
  resolve();
}));
promise.then(() => {
  console.log('pro_then'); // 4
  setTimeout(() => {
    console.log('pro_timeout'); // 8
  }, 0);
});
setTimeout(() => {
  console.log('last_setTimeout'); // 7
}, 0);
console.log('sync2'); // 3
