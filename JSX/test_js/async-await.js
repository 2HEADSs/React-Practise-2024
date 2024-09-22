// Simulate a function that fetches data (same as before)
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve('Data received successfully!');
      } else {
        reject('Error: Failed to fetch data');
      }
    }, 1000);
  });
}
console.log("Before fetch");
// Using async-await to handle the promise
async function fetchDataAsync() {
  try {
    const data = await fetchData(); // Await the promise resolution
    console.log(data); // If the promise resolves
  } catch (error) {
    console.error(error); // If the promise rejects
  }
}

console.log("After fetch");
async function synchronous() {
  console.log('Before in sync');
  await fetchDataAsync(); // Call the async function
  console.log('After in sync');
}

function asynchronious() {
  console.log('Before in Async');
  fetchDataAsync(); // Call the async function
  console.log('After in Async');
}

synchronous();
console.log("Last");
asynchronious();
