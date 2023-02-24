// Initiating string to be examined
var stringing = 'Hello';
// Asking what type of data "stringing" is
document.write(typeof stringing);

// Writing an equation to return "NaN"
document.write(0/0);

function number() {
    // Returning true with "isNaN"
    document.getElementById('number').innerHTML = isNaN('This is a number');
}
function notNumber() {
    // Returning false with "isNaN"
    document.getElementById('notNumber').innerHTML = isNaN('4');
}

// Returning infinite and negative infinite
document.write(2E310);
document.write(-3E310);

// Returning true and false using >
document.write(4 > 5);
document.write(5 > 4);

// Exercising use of the console
console.log(3+5);

// Returning true and false with "=="
console.log(5==4);
document.write(3==4);

// Declaring variables for comparison later
V=5;
W='Four';
X=4;
Y=4;
Z='hello';

// Comparing variables with "==="
console.log(X===Y);
console.log(X===Z);
console.log(X===W);
console.log(X===V);

// Returning true and false with AND and OR
document.write(X==4&&Y==4);
document.write(X==4&&W==4);
document.write(X==3||Y==3);
document.write(X==4||Y==3);

// Returning true and false with NOT
document.write(!(X==4));
document.write(!(X==3));