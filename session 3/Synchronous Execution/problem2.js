function second() {
  console.log("hello from second function");
}

function first() {
  console.log("start of first function");
  second();
  console.log("end of first function");
}

first();