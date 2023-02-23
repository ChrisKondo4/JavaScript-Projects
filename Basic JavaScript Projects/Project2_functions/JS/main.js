// Instatiating the function used for our button text
function My_First_Function() {
    // Declaring the variable
    var str = 'This is the button text!';
    // Concatenating the variable with this other string
    str += ' And I love it!';
    // Applying the "str" variable to the HTML element "Button_Text"
    document.getElementById('Button_Text').innerHTML = str;
}