// const firstUser = () => console.log('userOne');

// const secondUser = () => console.log('userTwo');

// const sampleFunction = () => {
//     console.log('sampleFunction')
//     setTimeout(firstUser, 0)
//     new Promise((resolve) => {
//         resolve('Resolved Data')
//     }).then(resolve => console.log(resolve))
//     secondUser();
// }

// sampleFunction();

// var getUserDetails = new Promise(resolve => {
//     setTimeout(() => resolve(1), 1000);
// })

// getUserDetails.then((result) => {
//     console.log(result);
//     return result * 2;
// }).then((result) => {
//     console.log(result);
//     return result * 2;
// }).then((result) => {
//     console.log(result);
//     return result * 2;
// })

// var getUserDetails = new Promise(resolve => {
//     setTimeout(() => resolve(1), 1000);
// })

// getUserDetails.then((result) => {
//     console.log(result);
//     return result * 2;
// });
// getUserDetails.then((result) => {
//     console.log(result);
//     return result * 2;
// });
// getUserDetails.then((result) => {
//     console.log(result);
//     return result * 2;
// });


// var getUserDetails = new Promise(resolve => {
//     setTimeout(() => resolve(1), 1000);
// })

// getUserDetails.then((result) => {
//     console.log(result);
//     return new Promise(function (resolve) {
//         setTimeout(() => resolve(result * 2), 1000);
//     });
// }).then((result) => {
//     console.log(result);
//     return new Promise(function (resolve) {
//         setTimeout(() => resolve(result * 2), 1000);
//     });
// }).then((result) => {
//     console.log(result);
//     return new Promise(function (resolve) {
//         setTimeout(() => resolve(result * 2), 1000);
//     });
// });


// var getUserDetails = new Promise((resolve, reject) => {
//     console.log('User Details Retrieved');
//     resolve();
// }).then(() => {
//     throw new Error('Something Failed');
//     console.log('Do this');
// }).catch(() => {
//     console.log('Do this');
// }).then(() => {
//     console.log('Do this, no matter what happened before');
// })