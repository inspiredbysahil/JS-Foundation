const productprice = 242;
const quantity = 2;

const originalbill = (productprice * quantity);
console.log("ORIGINAL AMOUNT -->", originalbill);

const discount = (originalbill * 10 / 100);
console.log("DISCOUNT-->", discount);
console.log("FINAL DISCOUNTED BILL-->", originalbill - discount);