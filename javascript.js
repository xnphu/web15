// aFunction("Huy!");
// function aFunction(a) {
// console.log("Hello "+a);
// }

// var bFunction = function() {
//     console.log("Hello Huy!");
// }

// bFunction();

// var cVariable = aFunction;

// cVariable();

//callback

// function add5(getNumber, print) {
//     var num = getNumber() + 5;
//     print(num);
// }

// function randomnumber() {
//     return Math.floor(Math.random()*1000);
// }

// function printNumber(num) {
//     console.log(num);
// }

// add5(randomnumber, printNumber);

// setTimeout(function() {
//     add5(randomnumber, printNumber);
// }, 1000*5);

// console.log("Ahihi");

//Function scope
// var a = 10;

// function abc() {
//     var b = 15;

//     console.log(a); //10
//     console.log(b); //15
// }

// abc();

// console.log(a); //10
// console.log(b); //undefined

// function printNum(num, waitTime) {
//     setTimeout(function() {
//         console.log(num);
//     }, (waitTime)*1000);
// }

// function countDown(num) {
//     var i = num;
//     for(i; i >= 0; i--) {
//         printNum(i, num-i);
//     }
// }

function countDown(num) {
    for(let i=num; i>=0; i--) {
        setTimeout(function() {
            console.log(i);
        }, (num-i)*1000);
    }
}

countDown(5);