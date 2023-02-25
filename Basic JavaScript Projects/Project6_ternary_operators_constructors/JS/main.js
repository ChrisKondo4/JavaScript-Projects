// Function for the "Ride" section
function Ride_Function() {
    // Instantiating variables
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    // Equation for determining whether you are too short or tall enough to ride
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    // Displaying result
    document.getElementById("Ride").innerHTML = Can_ride + " to ride";
}

// Instantiating the "Trends" class
function Trends(NewThing, WhatToDo) {
    this.NewThing = NewThing;
    this.WhatToDo = WhatToDo;
}
// Creating an object within the "Trends" class
var FS2017 = new Trends('Fidget Spinners', 'collecting and spinning them.');

// Using our new object
function WhatsNew() {
    document.getElementById('New_and_This').innerHTML =
    'The year is 2017 and the new trend is: ' + FS2017.NewThing +
    ". So what are we doing? We're " + FS2017.WhatToDo;
}

// Function for our "Nested" section
function Pemdas() {
    document.getElementById('Nested_Function').innerHTML = WhichAnswer();
    document.getElementById('Nested_Function_2').innerHTML = CorrectAnswer();
    // Displaying the explanation of how we get to the incorrect answer. 
    function WhichAnswer() {
        var Result = 6 / (2*(1+2));
        var Equation = "If we solve 6/2(1+2) incorrectly, we come up with the answer of: " + Result;
        return Equation;
    }
    // Displaying the explanation of how we get to the correct answer.
    function CorrectAnswer() {
        var NewResult = 6/2*(1+2);
        var NewEquation = "The above result comes from multiplying before dividing. However, PEMDAS doesn't prioritize multiplication over division, meaning that we resolve the operators from left to right, giving us the correct result of: " + NewResult;
        return NewEquation;
    }
}