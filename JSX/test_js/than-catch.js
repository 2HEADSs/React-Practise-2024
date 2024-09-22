// Simulate a function that fetches data
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.5; // Randomly succeed or fail
        if (success) {
          resolve('Data received successfully!');
        } else {
          reject('Error: Failed to fetch data');
        }
      }, 1000); // Simulate 1 second delay
    });
  }
  
  // Using then-catch to handle the promise
  fetchData()
    .then((data) => {
      console.log(data); // If the promise resolves
    })
    .catch((error) => {
      console.error(error); // If the promise rejects
    });
  
    console.log("After");