const products = {
    1: "laptop",
    2: "phone",
    3: "tablet"
};

function getproduct(id) {
    return new Promise(function (resolve, reject) {
        if (products[id]) {
            resolve(products[id]);
        } else {
            reject("product not found");
        }
    });
}

getproduct(2)
    .then(function (product) {
        console.log(product);
    })
    .catch(function (error) {
        console.log(error);
    });
