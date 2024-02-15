const higherOrderFn = (cb) => {
  const data = {
    username: 'alice'
  };

  console.log('1. before timeout call');

  setTimeout(() => {
    console.log('2. inside the timeout');
    data.username = 'bob';
    cb(data);
  }, 1000);

  console.log('3. after timeout call');
};

console.log('4. before main call');

higherOrderFn((arg1) => {
  console.log('arg1', arg1);
  console.log('5. inside callback');
});

console.log('6. after main call');
