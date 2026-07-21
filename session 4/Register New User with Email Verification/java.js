function sendVerificationEmail(email) {
    return new Promise(function (resolve, reject) {
        console.log("sending verification email...");

        setTimeout(function () {
            console.log("email sent successfully");
            resolve();
        }, 2000);
    });
}

async function registerUser(name, email) {
    try {
        if (!name || !email) {
            throw "invalid user data";
        }

        await sendVerificationEmail(email);
        console.log("user registered successfully");
    } catch (error) {
        console.log(error);
    }
}

registerUser("esraa", "esraa@gmail.com");