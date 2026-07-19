function greet(name, callback) {
  console.log("hello " + name);
  callback();
}

function message() {
  console.log("welcome");
}

greet("haneen", message);