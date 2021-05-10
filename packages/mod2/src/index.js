const sum = (...args) => {
  return args.reduce((prev, acc) => prev + acc, 0);
}

const foo = () => {
  const args = Array.from(arguments);
  return args;
}

sum(1, 2, 3);

foo(1, 2, 3);