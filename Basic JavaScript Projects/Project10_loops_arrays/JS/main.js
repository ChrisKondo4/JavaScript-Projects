// Declaring Variables for the Party Member list
var Party_Members = ["Tank", "Support", "Damage", "Controller"];
var Stuff = "";
var K;
// For Loop to print out all of the Party Members
function for_Loop() {
    for (K = 0; K < Party_Members.length; K++) {
        Stuff += Party_Members[K] + '<br>';
    }
    document.getElementById('List_of_Party_Members').innerHTML = Stuff;
}

// Array Function
function array_Function() {
    // all of the elements in the Estelle array
    var Estelle = [];
    Estelle[0] = "Strik";
    Estelle[1] = "Rose Warp";
    Estelle[2] = "Piercing Shot";
    Estelle[3] = "Crystal Thorns";
    document.getElementById("Array").innerHTML = 'As you can see, Estelle is ' + Estelle[1] + 'ing.';
}

// Function for testing constants
function constant_function() {
    // Creates Kai
    const Kai = {position:'Goalie', playstyle:'Ranged', rank:'Diamond'};
    // Adds new elements to the array
    Kai.rank = 'Challenger';
    Kai.Training1 = 'Missile Propulsion';
    // Utilizing the return keyword just to test it
    function ranking() {
        return Kai.rank;
    }
    document.getElementById("Constant").innerHTML = ranking() + ' ' + Kai.Training1;
}

// Function for using the "let" keyword and again testing the return keyword
function Profile() {
    let OmegaStriker = {
        rank: 'Diamond ',
        position: 'Goalie ',
        character: 'Asher, ',
        training1: 'Stagger Swagger, ',
        training2: 'Unstoppable, ',
        training3: 'Acrobatics, ',
        complete_data : function() {
            return this.rank + this.position + this.character + this.training1 + this.training2 + this.training3;
        }
    };
    document.getElementById('Asher').innerHTML = OmegaStriker.complete_data();
}