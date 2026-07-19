let orders = [
  { id: 1, status: "valid", stockavailable: true, amount: 100 },
  { id: 2, status: "cancelled", stockavailable: true, amount: 200 },
  { id: 3, status: "valid", stockavailable: false, amount: 150 },
  { id: 4, status: "invalid", stockavailable: true, amount: 300 },
  { id: 5, status: "valid", stockavailable: true, amount: 250 },
  { id: 6, status: "valid", stockavailable: false, amount: 120 },
  { id: 7, status: "valid", stockavailable: true, amount: 180 }
];

let totalrevenue = 0;
let successfulorders = 0;
let processedorders = 0;
let skippedinrow = 0;
let stockfailures = 0;
let stopmessage = "";

for (let i = 0; i < orders.length; i++) {
  let order = orders[i];

  if (
    order.status === "cancelled" ||
    order.status === "invalid" ||
    order.stockavailable === false
  ) {
    skippedinrow++;

    if (order.stockavailable === false) {
      stockfailures++;
    }

    if (skippedinrow === 3 || stockfailures === 3) {
      stopmessage = "system stopped";
      break;
    }

    continue;
  }

  totalrevenue += order.amount;
  successfulorders++;
  processedorders++;
  skippedinrow = 0;
}

console.log("total revenue:", totalrevenue);
console.log("successful orders:", successfulorders);
console.log("processed orders:", processedorders);

if (stopmessage !== "") {
  console.log(stopmessage);
}