
// function convertToPositiveNumber(num) {

//     return num * -1;

// }

// let positveNumber = convertToPositiveNumber(-10)
// console.log(positveNumber);


// console.log(Math.round(1.5));
// console.log(Math.round(2.5));
// console.log(Math.round(3.5));
// console.log(Math.round(3.546356));


// console.log(Math.ceil(3.01));
// console.log(Math.floor(3.90));


// Ludo_Dice


// let min = 1;
// let max = 6;
// let result = Math.floor(Math.random() * (max - min + 1)) + min
// console.log(result);

// console.log("57");
// console.log(Number.parseInt(89));


// let num = 356.946;
// console.log(num.toFixed());

// console.log(num.toPrecision(4));


// let fileName = "sahil.jpg";
// console.log(fileName.endsWith(".png") || fileName.endsWith(".jpeg"));

// console.log(fileName.includes("jpg"));



// let gm = "Hello , bhai kya haal  chal hai Hello";
// console.log(gm.replace("Hello", "hii"));
// console.log(gm.replaceAll("Hello", "hii"));



// console.log(Date.now()); // to get current time stamp 


// let date = new Date;

// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getMonth());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());



// let product = ["tshirt", "pant", "cap", "shoes", "shirt"];
// console.log(product.length - 2);
let product = [["tshirt", 436], ["pant", 435], ["cap", 432], ["shoes", 322], ["shirt", 245]];

// console.log(product[0][0]);

for (let i = 0; i < product.length; i++) {
    // console.log(i);
    console.log(product[i][0]);
}


