// // Синхронный подход
// console.log("Starting task...");
// let values = [1, 2, 3, 4, 5];
// for (let value of values){
//     console.log(value)
// // }

// // console.log("Finalized the task")

// // // Асинхронный подход: setTimeout (() => {}, 3000)

// // console.log("Start....");
// // setTimeout(() => {
// //   console.log("Requesting data from server...");
// // }, 3000);
// // console.log("Continue...");

// // PROMISE
// // pending
// // fulfilled
// // reject

// const user = {
//   id: 1,
//   name: "Alex",
//   isTester: false,
// };

// const promise = new Promise((resolve, reject) => {
//   if (user.isTester) {
//     resolve(`User name ${user.name}, tester: ${user.isTester} > is a tester`);
//   } else {
//     reject(`User name ${user.name}, tester: ${user.isTester} > not a tester`);
//   }
// });

// console.log(promise);

// // methods: then, catch, finally

// promise
//   .then((resolveMessage) => console.log(resolveMessage))
//   .catch((error) => console.error(error))
//   .finally(() => console.log("Promise exectuted"))

// FETCH

const Comments_url = "https://jsonplaceholder.typicode.com/commentss";

const getComments = fetch(Comments_url, {
  method: "GET",
});

const dataStore = [];
const errMessage = "Promise failed";

getComments
  .then((response) => response.json())
  .then((comment) => dataStore.push(comment))
  .catch((err) => console.log(errMessage));

console.log(dataStore);
