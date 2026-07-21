function calculateshipping(weight) {
    return new Promise(function (resolve, reject) {
        if (weight <= 0) {
            reject("invalid weight");
        } else {
            resolve("shipping cost: " + weight * 5);
        }
    });
}

calculateshipping(10)
    .then(function (cost) {
        console.log(cost);
    })
    .catch(function (error) {
        console.log(error);
    });