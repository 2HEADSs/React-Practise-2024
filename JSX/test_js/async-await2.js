function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   const success = Math.random() > 0.5;
      const success = true;
      if (success) {
        resolve('Data received successfully!');
      } else {
        reject('Error: Failed to fetch data');
      }
    }, 1000);
  });
}

console.log('Before fetch');

async function fetchDataAsync() {
  try {
    const data = await fetchData(); // Await the promise resolution
    return 'success'; // If the promise resolves
  } catch (error) {
    console.error(error); // If the promise rejects
    return 'failure';
  }
}

console.log('After fetch');

async function asynchronious() {
  console.log('Before in sync');
  await fetchDataAsync();
  const result = await fetchDataAsync(); // Await the async function to get the result
  console.log(result + ' asynchronious'); // This will log "success" or "failure" based on the outcome
  console.log('After in sync');
  console.log('1');
}

function synchronous() {
  console.log('Before in Async');
  fetchDataAsync().then((result) => console.log(result + ' synchronous')); // Use .then() to handle the promise
  console.log('After in Async');
}

synchronous();
asynchronious();
console.log('Last');
