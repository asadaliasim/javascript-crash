// const promise = new Promise(function (resolve, reject) {
//   // do async task
//   setTimeout(() => {
//     console.log(`async task completed`);
//     resolve();
//   }, 1000);
// });

// promise
//   .then(() => {
//     console.log('promise consumed');
//   })
//   .catch(() => {});

// new Promise((resolve, reject) => {
//   // do async task
//   setTimeout(() => {
//     console.log(`async2 task completed`);
//     resolve();
//   }, 1000);
// }).then(() => {
//   console.log(`async 2`);
// });

// how to send data

// const anotherPromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: 'asad' });
//   }, 1000);
// });

// anotherPromise.then((user) => {
//   console.log(user);
// });

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ name: 'asad', password: 'undefined' });
//     }
//     reject('error st went wrong');
//   }, 1000);
// });

// promise1
//   .then((user) => {
//     console.log(user);
//     return user.name;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => console.log('promise resolved or rejected'));

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: 'JAvaScript', password: 'undefined' });
//     }
//     reject('error: js went wrong');
//   }, 1000);
// });

// async function consumePromise() {
//   try {
//     const response = await promise2;
//     console.log(response);
//   } catch (err) {
//     console.log(err);
//   }
// }

// consumePromise();

// api call

// async function getAllUsers() {
//   try {
//     const res = await fetch('https://api.github.com/users/asadaliasim');
//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// getAllUsers();

fetch('https://api.github.com/users/asadaliasim')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
