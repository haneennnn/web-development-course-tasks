function login(callback) {
  console.log("logging in...");

  setTimeout(function () {
    console.log("login successful");
    callback();
  }, 2000);
}

function nextstep() {
  console.log("opening dashboard");
}

login(nextstep);