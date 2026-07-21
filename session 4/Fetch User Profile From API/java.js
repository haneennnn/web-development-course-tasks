async function getUserProfile(id) {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/" + id
        );

        if (!response.ok) {
            throw "user not found";
        }

        const user = await response.json();

        console.log("name: " + user.name);
        console.log("email: " + user.email);
    } catch (error) {
        console.log(error);
    }
}

getUserProfile(1);