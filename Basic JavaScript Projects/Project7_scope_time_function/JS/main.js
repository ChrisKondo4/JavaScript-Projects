// Global variable
X = 7;

// Click function for getting hours
function Clicketh() {
    // Gets your time only in hours and asks if it's below 9am
    if (new Date().getHours() > 9) {
        // displays message if the current time is after 9am
        document.getElementById('clicky').innerHTML = 'You are after Tech Academy opening hours!'
    }
}

// Millionaire function
function Enough() {
    // Establishing wealth variable
    var wealth = 0;
    wealth = document.getElementById('wealth').value;
    // Asking if you are below $1M
    if (wealth < 1000000) {
        document.getElementById('result').innerHTML = 'You are not a millionaire!';
    }
    // What happens if you're above $1M
    else {
        document.getElementById('result').innerHTML = 'You are a millionaire!';
    }
}

// Function for telling you what time it is
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    // Parameters for morning time
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    // Parameters for afternoon time
    else if (Time12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    // Parameters for evening time
    else {
        Reply = "It is evening time.";
    }
    // Displays result
    document.getElementById("Time_of_day").innerHTML = Reply;
}