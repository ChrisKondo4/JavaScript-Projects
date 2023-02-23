function my_Dictionary() {
    // Declaring the dictionary known as "Fireball"
    var Fireball = {
        Type:'Electric',
        Level:3,
        Owner:'Wizard',
        Hitbox_Overlap:false
    }
    // Deleting a key from Fireball
    delete Fireball.Type;
    // Attempting to print the value from the deleted key 
    document.getElementById('Dictionary').innerHTML = Fireball.Type;
}