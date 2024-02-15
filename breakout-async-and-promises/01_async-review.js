console.log('1. above the setTimeout');

// async code cannot run until the sync code is done

const returnVal = setTimeout(() => {
  console.log('3. hello world');
}, 'apple');

console.log(returnVal);

console.log('2. below the setTimeout');
