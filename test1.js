const isPrime = (num) => {
  if (num <= 1) return false;

  const sqrt = Math.sqrt(num);
  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) return false;
  }

  return true;
};

const fooBar = () => {
  let array = [];
  for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
      continue;
    } else if (i % 3 === 0 && i % 5 === 0) {
      array.push('FooBar');
    } else if (i % 3 === 0) {
      array.push('Foo');
    } else if (i % 5 === 0) {
      array.push('Bar');
    } else {
      array.push(i);
    }
  }

  return array.reverse().join(', ');
};

console.log(fooBar());
