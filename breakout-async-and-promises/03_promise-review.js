// promises are
// * objects
// * represent a future value

// pending, fulfilled, rejected

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

const promise = promiseGenerator('one', true);

console.log(promise);

// every .then returns a promise

promise
  .then((returnVal) => {
    console.log('returnVal', returnVal);
    return 42;
  })
  .then((returnVal) => {
    console.log('returnVal', returnVal);
    return 42;
  })
  .catch((err) => {
    console.log('the promise failed', err);

    // return defaultData;
  })
  .then((returnVal) => {
    console.log('returnVal', returnVal);
    return 42;
  })
  .then((returnVal) => {
    console.log('returnVal', returnVal);
    return 42;
  })
  .catch((err) => {
    console.log('the promise failed', err);

    // return defaultData;
  })
