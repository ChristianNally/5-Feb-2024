// in series
// in parallel

// promise 1: 1000ms
// promise 2: 2000ms
// promise 3: 3000ms

const promiseGenerator = (promiseName, failing = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (failing) {
        return reject(promiseName);
      }
      resolve(promiseName);
    }, 1000);
  });
};

const promiseOne = promiseGenerator('promise one');
const promiseTwo = promiseGenerator('promise two');
const promiseThree = promiseGenerator('promise three');

const promises = [promiseOne, promiseTwo, promiseThree];

Promise.all(promises)
  .then((resultArr) => {
    console.log(resultArr);
  });
