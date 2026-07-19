function loaddata(callback) {
  console.log("loading...");

  setTimeout(function () {
    console.log("data loaded");
    callback();
  }, 2000);
}

function done() {
  console.log("finished");
}

loaddata(done);