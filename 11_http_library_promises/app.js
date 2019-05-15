const http = new EasyHTTP()

// Get Users
// http
//   .get('https://jsonplaceholder.typicode.com/users')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))

// User data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'j.doe@example.com',
}

// Create a new user
// http
//   .post('https://jsonplaceholder.typicode.com/users', data)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))

// Update a user
// http
//   .put('https://jsonplaceholder.typicode.com/users/4', data)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))

// Delete a user
http
  .delete('https://jsonplaceholder.typicode.com/users/3', data)
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
