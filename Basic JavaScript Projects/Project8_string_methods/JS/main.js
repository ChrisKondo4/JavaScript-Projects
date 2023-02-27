// Concatenating function
function Clicketh() {
    // Making strings to concatenate
    var Clicketh1 = "Clicky ";
    var Clicketh2 = "Clickerson ";
    var Clicketh3 = "III";
    // Concatenating strings
    var Clickerson = Clicketh1.concat(Clicketh2, Clicketh3);
    document.getElementById("clicky").innerHTML = Clickerson.toUpperCase();
}

// Slicing and method tests
function slicer() {
    var Sliced = 'For THE MOUSE CLICKING!!!';
    // Testing the .search() method!
    var Position = Sliced.search("CLICKING!!!");
    // Slicing the string
    var Clicktime = Sliced.slice(Position,25);
    document.getElementById('sliceth').innerHTML = Clicktime;
    // Our guinea pig variable
    var K = 4.2457;
    // .valueOf() test variable
    var Clickmas = 'We click again';
    // Displaying results of each method
    document.getElementById('stringing').innerHTML = K.toString();
    document.getElementById('stringing2').innerHTML = K.toPrecision(4);
    document.getElementById('stringingAgain').innerHTML = K.toFixed();
    document.getElementById('clickery').innerHTML = Clickmas.valueOf();
}