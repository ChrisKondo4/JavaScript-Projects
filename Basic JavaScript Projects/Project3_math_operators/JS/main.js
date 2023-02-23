// Function for addition
function addition() {
    var addition = 3 + 5;
    // Changes button text to "3 + 5 = 8"
    document.getElementById("Addition").innerHTML = "3 + 5 = " + addition;
}

// Function for subtraction
function subtraction() {
    var subtract = 3 - 1;
    // Changes button text to "3 - 1 = 2"
    document.getElementById('Subtraction').innerHTML = '3 - 1 = ' + subtract; 
}

// Function for multiplication
function multiplication() {
    var multiply = 5 * 6;
    // Changes button text to "5 x 6 = 30"
    document.getElementById('Multiplication').innerHTML = "5 x 6 = " + multiply;
}

// Function for division
function division() {
    var divide = 48 / 6;
    // Changes button text to "48 / 6 = 8"
    document.getElementById('Division').innerHTML = '48 / 6 = ' + divide;
}

// Function for a math equation that includes addition, subtraction, multiplication, and division
function combo() {
    var comboing = (3 + 5 - 1) * 5 / 2;
    // Changes button text to the equation and result
    document.getElementById('Combo').innerHTML = '3 + 5 - 1 * 5 / 2 = ' + comboing;
}

// Function for using the modulus action
function modulus_Operator() {
    var modulus = 25 % 6;
    document.getElementById('Modulus').innerHTML = 'When you divide 25 by 6 you have a remainder of: ' + modulus;
}

// Function for negation
function negation_Operator() {
    var x = 10;
    document.getElementById('Negation').innerHTML = -x;
}

// Function for incrementation
function increment() {
    var Y = 5;
    Y++;
    document.write(Y);
}

// Function for decrementation
function decrement() {
    var Y;
    Y--;
    document.write(Y);
}

// displays random number form 0 to 100
window.alert(Math.random() * 100);