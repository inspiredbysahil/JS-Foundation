let phy = 90;
let che = 400;
let maths = 40;

let subjects = (phy, che, maths);
let avg = subjects / 3

if ((phy, maths, che) >= 100) {
    console.log("Invalid Marks");
}

if (maths < 40 || che < 40 || phy < 40) {
    console.log("Result : Fail");
} else {
    if (avg >= 75 || avg <= 100) {
        console.log("Distinction");
    } else if (avg >= 60 || avg < 74) {
        console.log(" First Division");
    } else if (avg >= 50 || avg < 59) {
        console.log("Second Division");
    } else {
        console.log("Pass");
    }
}
