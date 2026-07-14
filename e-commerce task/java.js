let customername = prompt("Enter customer name:");
let category = prompt("Enter product category (Electronics, Clothing, Grocery):");
let price = Number(prompt("Enter product price:"));
let quantity = Number(prompt("Enter quantity:"));
let coupon = prompt("Enter coupon code:");
let payment = prompt("Enter payment method (Cash, Card, Wallet):");
let subtotal = price * quantity;
let categorydiscount = 0;
if (category === "Electronics") {
    categorydiscount = subtotal * 0.10;
} else if (category === "Clothing") {
    categorydiscount = subtotal * 0.15;
} else if (category === "Grocery") {
    categorydiscount = subtotal * 0.05;
}
let coupondiscount = 0;
if (coupon === "SAVE10") {
    coupondiscount = 10;
}
let paymentdiscount = 0;
if (payment === "Wallet") {
    paymentdiscount = 20;
} else if (payment === "Card") {
    paymentdiscount = 5;
}
let total = subtotal - categorydiscount - coupondiscount - paymentdiscount;
if (total < 0) {
    total = 0;
}
let vat = total * 0.15;
let finalPrice = total + vat;

console.log("INVOICE");
console.log("Customer Name: " + customername);
console.log("Category: " + category);
console.log("Price: " + price);
console.log("Quantity: " + quantity);
console.log("Subtotal: " + subtotal);
console.log("Category discount: " + categorydiscount);
console.log("Coupon discount: " + coupondiscount);
console.log("Payment discount: " + paymentdiscount);
console.log("VAT: " + vat);
console.log("Final Bill: " + finalPrice);