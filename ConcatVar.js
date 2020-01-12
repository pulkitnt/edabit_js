function concat(...args) {
  let a = [];
  args.forEach(function(arg) {
    a.push(...arg);
  });
  return a;
}

console.log(concat([1, 2, 3], [4, 5], [6, 7]));
