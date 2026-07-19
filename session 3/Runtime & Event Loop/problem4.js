console.log("start");

setTimeout(function () {
  console.log("async task");
}, 0);

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("end");