const http = new EasyHTTP;

//get users
// http.get('https://jsonplaceholder.typicode.com/users')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//user data
const data = {
  name: 'john doe',
  username: 'jdoe',
  email: 'jdoe@gmail.com'
}
//create post
// http.post('https://jsonplaceholder.typicode.com/users', data)
//    .then((data) => console.log(data))
//    .catch((err) => console.log(err));

//update delete
http.delete('https://jsonplaceholder.typicode.com/users/2')
   .then((data) => console.log(data))
   .catch((err) => console.log(err));