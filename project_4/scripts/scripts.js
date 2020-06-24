// What is sent to the console?

function foo (value1) {
  let value2 = bar(value1 * value1)
  return value2;
}

function bar (value1) {
  return value1 + 1;
}

//console.log(foo(1))