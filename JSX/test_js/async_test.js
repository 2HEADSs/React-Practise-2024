// console.log('Hello');

// setTimeout(function () {
//   console.log('Wait 0 second');
// }, 0);

// console.log('Hello again');

function syncFunction() {
  console.log('Synchronous function');
}
syncFunction();

console.log('Another synchronous log');


console.log('Start');

setTimeout(function() {
  console.log('Async log');
}, 0);

console.log('End');

