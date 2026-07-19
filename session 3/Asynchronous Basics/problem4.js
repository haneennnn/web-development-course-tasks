function sendmessage() {
  console.log("sending message...");

  setTimeout(function () {
    console.log("message sent");
  }, 2000);
}

sendmessage();