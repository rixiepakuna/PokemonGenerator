/**
 * Created by nsokolni on 12/18/2017.
 */

//note to self: math.random goes from 0 (inclusive) to 1 (exclusive)
//Western Great Forest == 1
//Crying Plateau == 2
//Eastern Great Forest == 3
//Dragon's Peninsula == 4
//Lion's Plains == 5
//Cloven Volcano == 6
//Subterranean River == 7
//Rolling Mountains == 8
//Onix Peak == 9
//Chilling Cliffs == 10
//Desert Strip == 11
//Fairy Island == 12
//Paradise Island == 13
//Mud Baths == 14


//THE POKEMON DATA

//pokemon object constructor
var Pokemon = function (name, rarity, type1, type2, type_evolved,
                        fem_chance, abilities, egg_moves) {
    this.name = name;
    this.rarity = rarity;
    this.type1 = type1;
    this.type2 = type2;
    this.type_evolved = type_evolved;
    this.fem_chance = fem_chance;
    this.abilities = abilities;
    this.egg_moves = egg_moves;
};

var Pokemon_array = [
    //rarity 0
    [
        new Pokemon("Error", 0, "ERROR", "ERROR", "ERROR",
            0.5, ["ERROR"],
            ["Error"])
    ],
    //rarity 1
    [
        new Pokemon("Error", 1, "ERROR", "ERROR", "ERROR",
            0.5, ["ERROR"],
            ["Error"])
    ],
    //2
    [
        new Pokemon("Caterpie", 2, "BUG", "NONE", "FLYING",
            0.5, ["SHIELD DUST", "RUN AWAY"],
            ["No Egg Moves"]),
        new Pokemon("Weedle", 2, "BUG", "POISON", "NONE",
            0.5, ["SHIELD DUST", "RUN AWAY"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Test3", 2, "DARK", "GRASS", "FAIRY",
            0.5, ["SHIELD DUST", "RUN AWAY"],
            ["Egg Moves Unavailable"]),
        new Pokemon("Test4", 2, "PSYCHIC", "GRASS", "NONE",
            0.5, ["SHIELD DUST", "RUN AWAY"],
            ["Egg Moves Unavailable"])
    ],
    //3
    [
        new Pokemon("Uncommon Poke1", 3, "BUG", "FAIRY", "FIRE",
        0.5, ["N/A"],
        ["N/A"]),
        new Pokemon("Uncommon Poke2", 3, "WATER", "DARK", "POISON",
            0.5, ["N/A"],
            ["N/A"]),
        new Pokemon("Uncommon Poke2", 3, "PSYCHIC", "FLYING", "POISON",
            0.5, ["N/A"],
            ["N/A"])
    ],
    //rarity 4
    [
        new Pokemon("Bulbasaur", 4, "GRASS", "POISON", "NONE",
            0.125, ["OVERGROW", "CHLOROPHYLL"],
            ["Amnesia", "Charm", "Curse", "Endure", "Giga Drain", "Grass Whistle"]),
        new Pokemon("Charmander", 4, "FIRE", "NONE", "FLYING",
            0.125, ["BLAZE", "SOLAR POWER"],
            ["Air Cutter", "Ancient Power", "Beat Up", "Belly Drum"]),
        new Pokemon("Squirtle", 4, "WATER", "NONE", "NONE",
            0.125, ["TORRENT", "RAIN DASH"],
            ["Aqua Jet", "Aqua Ring", "Aura Sphere", "Brine", "Dragon Pulse"])
    ],
    //5
    [
        new Pokemon("Endangered Poke", 5, "N/A", "N/A", "N/A",
        0.5, ["N/A"],
        ["N/A"])
    ]
];


//RANDOMIZING THE POKEMON’S STATS//

function randomize_sex (poke_fem_chance) {
    var rand_sex = Math.random();
    var sex;
    if (rand_sex < poke_fem_chance){
        sex = "FEMALE";
    }
    else if (rand_sex >= poke_fem_chance && rand_sex < 1){
        sex = "MALE";
    }
    else {
        console.log("Something went wrong with choosing the sex.");
        return -1; //error
    }
    return sex;
}

function randomize_eggmove_number () {
    var rand_number = Math.floor(Math.random() * 9) + 1;
    var eggmove_number;
    if (rand_number <= 3){
        eggmove_number = 0;
    }
    else if (rand_number >= 4 && rand_number <= 6){
        eggmove_number = 1;
    }
    else if (rand_number >= 7 && rand_number <= 8){
        eggmove_number = 2;
    }
    else if (rand_number == 9) {
        eggmove_number = 3;
    }
    else {
        console.log("Something went wrong with choosing how many egg moves.");
        return -1; //error
    }
    return eggmove_number;
}


function randomize_x_from_array(x, array){
    if (x > array.length){
        console.log("There are not enough arguments in the array to pick " + x + " of them.");
        return -1;
    }
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;
    //while there remain elements to shuffle...
    while (0 !== currentIndex){
        //pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // and swap it with the current element
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array.slice(0, x);
}


//later, will need to add a bit in so that the function will pick x based on result from randomize_eggmove_number

function randomize_eggmoves(eggmove_array){
    randomize_x_from_array(randomize_eggmove_number(), eggmove_array);
}







//RANDOMIZING A POKEMON SPECIES

function randomize_rarity () {
    var rand_rarity = Math.random();
    var poke_rarity;
    if (rand_rarity < 0.6){
        poke_rarity = 2; //overpopulated/common
    }
    else if (rand_rarity >= 0.6 && rand_rarity < 0.85){
        poke_rarity = 3; //uncommon
    }
    else if (rand_rarity >= 0.85 && rand_rarity < 0.9775){
        poke_rarity = 4; //rare
    }
    else if (rand_rarity >= 0.9775 && rand_rarity < 1) {
        poke_rarity = 5; //endangered
    }
    else {
        console.log("Something went wrong with choosing the rarity.");
        return -1; //error
    }
    return poke_rarity;
}

function rarity_to_string(poke_rarity){
    switch (poke_rarity){
        case 2: return "OVERPOPULATED/COMMON";
        case 3: return "UNCOMMON";
        case 4: return "RARE";
        case 5: return "ENDANGERED";
        default: return "Cannot change rarity to string.";
    }
}

function randomize_poke (type, rarity, never_found) {
    //this function will need to find all the Pokemon with the given type and rarity and then randomly pick one
    var possible_Pokemon = [];
    Pokemon_array[rarity].forEach(function(element) {
        var forbidden = false;
        never_found.forEach(function(f_type){
            if (f_type == element.type1 || f_type == element.type2 || f_type == element.type_evolved){
                forbidden = true;
            }
        });
        if ((element.type1 == type || element.type2 == type || element.type_evolved == type)
            && forbidden == false){
            possible_Pokemon.push(element);
        }
    });

    //need to make sure at least one Pokemon made it into possible_Pokemon.
    if (possible_Pokemon.length < 1){
        console.log("No suitable Pokemon exist with the randomized type and rarity.");
        return -1;
    }

    return possible_Pokemon[Math.floor(Math.random()*possible_Pokemon.length)];
}



//location/season constructor
var location_season = function (name, common_types, uncommon_types, rare_types, never_found){
    this.name = name;
    this.common_types = common_types;
    this.uncommon_types = uncommon_types;
    this.rare_types = rare_types;
    this.never_found = never_found;
};

var location_array = [
    [//array of values for WGF, in diff seasons
        new location_season("Western Great Forest in Spring",
            ["BUG", "DARK", "FLYING", "GRASS", "GRASS", "POISON"],
            ["GROUND", "NORMAL", "GHOST", "FAIRY"],
            ["ELECTRIC", "FIRE", "FIGHTING", "PSYCHIC", "WATER", "ROCK"],
            ["DRAGON", "STEEL", "ICE"]),
        new location_season("Western Great Forest in Summer",
            ["BUG", "BUG", "DARK", "FLYING", "GHOST", "GRASS", "POISON"],
            ["GROUND", "NORMAL", "ELECTRIC", "FIRE"],
            ["FAIRY", "FIGHTING", "PSYCHIC", "WATER", "ROCK"],
            ["DRAGON", "STEEL", "ICE"]),
        new location_season("Western Great Forest in Fall",
            ["BUG", "DARK", "FLYING", "GRASS", "POISON", "GHOST", "GHOST"],
            ["GROUND", "NORMAL"],
            ["ELECTRIC", "FIRE", "FIGHTING", "PSYCHIC", "WATER", "ROCK", "FAIRY"],
            ["DRAGON", "STEEL", "ICE"]),
        new location_season("Western Great Forest in Winter",
            ["DARK", "DARK", "GHOST", "POISON"],
            ["GROUND", "NORMAL", "GRASS", "BUG", "FLYING"],
            ["ELECTRIC", "FIRE", "FIGHTING", "PSYCHIC", "WATER", "ROCK", "FAIRY"],
            ["DRAGON", "STEEL", "ICE", "FIRE"])
    ],
    [
        new location_season("Crying Plateau in Spring",
            ["NORMAL", "ROCK", "WATER"],
            ["BUG", "ELECTRIC", "FLYING", "FIGHTING", "STEEL", "FAIRY", "GRASS"],
            ["DARK", "DRAGON", "GHOST", "GROUND", "POISON", "PSYCHIC"],
            ["FIRE", "ICE"]),
        new location_season("Crying Plateau in Summer",
            ["NORMAL", "ROCK", "WATER", "BUG", "ELECTRIC"],
            ["FLYING", "FIGHTING", "GHOST", "STEEL"],
            ["DARK", "DRAGON", "FAIRY", "GRASS", "GROUND", "POISON", "PSYCHIC"],
            ["FIRE", "ICE"]),
        new location_season("Crying Plateau in Fall",
            ["NORMAL", "ROCK", "WATER", "GHOST"],
            ["BUG", "ELECTRIC", "FLYING", "FIGHTING", "STEEL"],
            ["DARK", "DRAGON", "FAIRY", "GRASS", "GROUND", "POISON", "PSYCHIC"],
            ["FIRE", "ICE"]),
        new location_season("Crying Plateau in Winter",
            ["NORMAL", "ROCK", "WATER"],
            ["ELECTRIC", "FIGHTING", "GHOST", "STEEL", "DARK", "ICE"],
            ["BUG", "DRAGON", "FAIRY", "GROUND", "POISON", "PSYCHIC", "FLYING"],
            ["FIRE", "GRASS"])
    ],
    [
        new location_season("Eastern Great Forest in Spring",
            ["BUG", "ELECTRIC", "FLYING", "GRASS", "NORMAL", "POISON", "PSYCHIC", "GRASS", "FAIRY"],
            ["DRAGON", "FIRE", "GROUND", "WATER"],
            ["DARK", "FIGHTING", "ROCK", "STEEL", "GHOST"],
            ["ICE"]),
        new location_season("Eastern Great Forest in Summer",
            ["BUG", "ELECTRIC", "FLYING", "GRASS", "NORMAL", "POISON", "PSYCHIC", "BUG", "ELECTRIC", "FIRE"],
            ["DRAGON", "FAIRY", "GHOST", "GROUND", "WATER"],
            ["DARK", "FIGHTING", "ROCK", "STEEL"],
            ["ICE"]),
        new location_season("Eastern Great Forest in Fall",
            ["BUG", "ELECTRIC", "FLYING", "GRASS", "NORMAL", "POISON", "PSYCHIC", "GHOST"],
            ["DRAGON", "FAIRY", "FIRE", "GROUND", "WATER"],
            ["DARK", "FIGHTING", "ROCK", "STEEL"],
            ["ICE"]),
        new location_season("Eastern Great Forest in Winter",
            ["ELECTRIC", "NORMAL", "POISON", "PSYCHIC"],
            ["DRAGON", "FAIRY", "FLYING", "GHOST", "GROUND", "WATER", "DARK", "ICE", "GRASS", "BUG"],
            ["FIRE", "FIGHTING", "ROCK", "STEEL"],
            ["NONE"])
    ],
    [
        new location_season("Dragon's Peninsula in Spring",
            ["DRAGON", "ELECTRIC", "FIGHTING", "FIRE", "FLYING", "GRASS", "GRASS", "ROCK", "STEEL", "NORMAL", "POISON"],
            ["BUG", "DARK", "GROUND", "PSYCHIC", "WATER"],
            ["ICE", "GHOST"],
            ["FAIRY"]),
        new location_season("Dragon's Peninsula in Summer",
            ["DRAGON", "ELECTRIC", "ELECTRIC", "FIGHTING", "BUG", "FIRE", "FIRE", "FLYING", "GRASS", "ROCK", "STEEL", "NORMAL", "POISON"],
            ["DARK", "GHOST", "GROUND", "PSYCHIC", "WATER"],
            ["ICE"],
            ["FAIRY"]),
        new location_season("Dragon's Peninsula in Fall",
            ["DRAGON", "ELECTRIC", "FIGHTING", "FIRE", "FLYING", "GRASS", "GHOST", "ROCK", "STEEL", "NORMAL", "POISON"],
            ["BUG", "DARK", "GROUND", "PSYCHIC", "WATER"],
            ["ICE"],
            ["FAIRY"]),
        new location_season("Dragon's Peninsula in Winter",
            ["DRAGON", "ELECTRIC", "FIGHTING", "ICE", "ROCK", "STEEL", "NORMAL", "POISON", "DARK"],
            ["FIRE", "FLYING", "GHOST", "GROUND", "PSYCHIC", "WATER", "GRASS"],
            ["BUG"],
            ["FAIRY"])
    ],
    [
        new location_season("Lion's Plains in Spring",
            ["BUG", "ELECTRIC", "FLYING", "GRASS", "NORMAL", "POISON", "GRASS"],
            ["DARK", "FIGHTING", "FIRE", "GROUND", "PSYCHIC", "WATER", "FAIRY"],
            ["GHOST", "ROCK"],
            ["DRAGON", "STEEL", "ICE"]),
        new location_season("Lion's Plains in Summer",
            ["BUG", "ELECTRIC", "FLYING", "GRASS", "NORMAL", "POISON", "BUG", "ELECTRIC", "FIRE"],
            ["DARK", "FIGHTING", "GHOST", "GROUND", "PSYCHIC", "WATER"],
            ["FAIRY", "ROCK"],
            ["DRAGON", "STEEL", "ICE"]),
        new location_season("Lion's Plains in Fall",
            ["BUG", "ELECTRIC", "FLYING", "GRASS", "NORMAL", "POISON", "GHOST"],
            ["DARK", "FIGHTING", "FIRE", "GROUND", "PSYCHIC", "WATER"],
            ["FAIRY", "ROCK"],
            ["DRAGON", "STEEL", "ICE"]),
        new location_season("Lion's Plains in Winter",
            ["ELECTRIC", "NORMAL", "POISON", "DARK"],
            ["BUG", "FIGHTING", "GRASS", "GHOST", "GROUND", "PSYCHIC", "WATER", "ICE", "FLYING"],
            ["FAIRY", "ROCK", "FIRE"],
            ["DRAGON", "STEEL"])
    ],
    [
        new location_season("Cloven Volcano in Spring",
            ["FIGHTING", "FIRE", "NORMAL", "ROCK", "STEEL"],
            ["BUG", "DARK", "DRAGON", "ELECTRIC", "FLYING", "GROUND", "POISON", "PSYCHIC", "FAIRY", "GRASS"],
            ["GHOST"],
            ["WATER", "ICE"]),
        new location_season("Cloven Volcano in Summer",
            ["FIGHTING", "FIRE", "NORMAL", "ROCK", "STEEL", "FIRE", "BUG", "ELECTRIC"],
            ["DARK", "DRAGON", "FLYING", "GHOST", "GROUND", "POISON", "PSYCHIC"],
            ["FAIRY", "GRASS"],
            ["WATER", "ICE"]),
        new location_season("Cloven Volcano in Fall",
            ["FIGHTING", "FIRE", "NORMAL", "ROCK", "STEEL", "GHOST"],
            ["BUG", "DARK", "DRAGON", "ELECTRIC", "FLYING", "GROUND", "POISON", "PSYCHIC"],
            ["FAIRY", "GRASS"],
            ["WATER", "ICE"]),
        new location_season("Cloven Volcano in Winter",
            ["FIGHTING", "NORMAL", "ROCK", "STEEL", "DARK"],
            ["FIRE", "DRAGON", "ELECTRIC", "GHOST", "GROUND", "POISON", "PSYCHIC"],
            ["FAIRY", "ICE", "FLYING", "BUG"],
            ["WATER", "GRASS"])
    ],
    [
        new location_season("Subterranean River in Spring",
            ["WATER"],
            ["DARK", "POISON", "GRASS", "ROCK", "STEEL"],
            ["BUG", "DRAGON", "FIGHTING", "FLYING", "GHOST", "GROUND", "ICE", "NORMAL", "PSYCHIC"],
            ["FAIRY", "FIRE", "ELECTRIC"]),
        new location_season("Subterranean River in Summer",
            ["WATER"],
            ["DARK", "POISON", "GHOST", "ROCK", "STEEL", "BUG", "GRASS"],
            ["DRAGON", "FIGHTING", "FLYING", "GROUND", "ICE", "NORMAL", "PSYCHIC"],
            ["FAIRY", "FIRE", "ELECTRIC"]),
        new location_season("Subterranean River in Fall",
            ["WATER", "GHOST"],
            ["DARK", "POISON", "ROCK", "STEEL"],
            ["BUG", "DRAGON", "FIGHTING", "FLYING", "GRASS", "GROUND", "ICE", "NORMAL", "PSYCHIC"],
            ["FAIRY", "FIRE", "ELECTRIC"]),
        new location_season("Subterranean River in Winter",
            ["WATER", "DARK"],
            ["POISON", "GHOST", "ROCK", "STEEL", "ICE"],
            ["DRAGON", "FIGHTING", "GROUND", "NORMAL", "PSYCHIC"],
            ["FAIRY", "FIRE", "ELECTRIC", "BUG", "FLYING", "GRASS"])
    ],
    [
        new location_season("Rolling Mountains in Spring",
            ["FIGHTING", "BUG", "FLYING", "NORMAL", "ROCK", "FAIRY", "GRASS"],
            ["DARK", "ELECTRIC", "FIRE", "DRAGON", "GROUND", "STEEL", "ICE"],
            ["POISON", "WATER", "GHOST"],
            ["PSYCHIC"]),
        new location_season("Rolling Mountains in Summer",
            ["FIGHTING", "BUG", "BUG", "FLYING", "NORMAL", "ROCK", "ELECTRIC", "FIRE"],
            ["DARK", "FAIRY", "GHOST", "GRASS", "DRAGON", "GROUND", "STEEL", "ICE"],
            ["POISON", "WATER"],
            ["PSYCHIC"]),
        new location_season("Rolling Mountains in Fall",
            ["FIGHTING", "BUG", "FLYING", "NORMAL", "ROCK", "GHOST"],
            ["DARK", "ELECTRIC", "FAIRY", "FIRE", "GRASS", "DRAGON", "GROUND", "STEEL", "ICE"],
            ["POISON", "WATER"],
            ["PSYCHIC"]),
        new location_season("Rolling Mountains in Winter",
            ["FIGHTING", "NORMAL", "ROCK", "ICE", "DARK"],
            ["BUG", "ELECTRIC", "FAIRY", "GHOST", "DRAGON", "GROUND", "STEEL", "FLYING"],
            ["POISON", "WATER", "FIRE", "GRASS"],
            ["PSYCHIC"])
    ],
    [
        new location_season("Onix Peak in Spring",
            ["FIGHTING", "FLYING", "NORMAL", "GROUND", "PSYCHIC", "STEEL", "ROCK", "FAIRY", "GRASS"],
            ["BUG", "DARK", "ELECTRIC", "DRAGON", "ICE"],
            ["FIRE", "POISON", "GHOST"],
            ["WATER"]),
        new location_season("Onix Peak in Summer",
            ["FIGHTING", "FLYING", "NORMAL", "GROUND", "PSYCHIC", "STEEL", "ROCK", "BUG", "ELECTRIC"],
            ["FIRE", "DARK", "DRAGON", "FAIRY", "GHOST", "GRASS", "ICE"],
            ["POISON"],
            ["WATER"]),
        new location_season("Onix Peak in Fall",
            ["FIGHTING", "FLYING", "NORMAL", "GROUND", "PSYCHIC", "STEEL", "ROCK", "GHOST"],
            ["BUG", "DARK", "ELECTRIC", "DRAGON", "FAIRY", "GRASS", "ICE"],
            ["FIRE", "POISON"],
            ["WATER"]),
        new location_season("Onix Peak in Winter",
            ["FIGHTING", "NORMAL", "GROUND", "PSYCHIC", "STEEL", "ROCK", "ICE", "DARK"],
            ["FLYING", "ELECTRIC", "DRAGON", "FAIRY", "GHOST"],
            ["POISON", "BUG", "GRASS"],
            ["WATER", "FIRE"])
    ],
    [
        new location_season("Chilling Cliffs in Spring",
            ["DARK", "FIGHTING", "FAIRY", "ICE", "NORMAL", "GRASS"],
            ["BUG", "FLYING", "PSYCHIC", "STEEL", "GHOST"],
            ["DRAGON", "ELECTRIC", "POISON"],
            ["FIRE", "WATER"]),
        new location_season("Chilling Cliffs in Summer",
            ["DARK", "FIGHTING", "GHOST", "ICE", "NORMAL", "BUG"],
            ["ELECTRIC", "FLYING", "PSYCHIC", "STEEL"],
            ["DRAGON", "FAIRY", "GRASS", "POISON"],
            ["FIRE", "WATER"]),
        new location_season("Chilling Cliffs in Fall",
            ["DARK", "FIGHTING", "GHOST", "ICE", "NORMAL", "GHOST"],
            ["BUG", "FLYING", "PSYCHIC", "STEEL"],
            ["DRAGON", "ELECTRIC", "FAIRY", "GRASS", "POISON"],
            ["FIRE", "WATER"]),
        new location_season("Chilling Cliffs in Winter",
            ["DARK", "FIGHTING", "GHOST", "ICE", "ICE", "NORMAL", "DARK"],
            ["PSYCHIC", "STEEL"],
            ["DRAGON", "ELECTRIC", "FAIRY", "POISON", "BUG", "FLYING"],
            ["FIRE", "WATER", "GRASS"])
    ],
    [
        new location_season("Desert Strip in Spring",
            ["GROUND", "ROCK", "GRASS", "GRASS", "FAIRY"],
            ["BUG", "FIGHTING", "FLYING", "NORMAL", "POISON", "PSYCHIC", "STEEL", "FIRE", "DARK"],
            ["GHOST", "ELECTRIC", "WATER", "DRAGON"],
            ["ICE"]),
        new location_season("Desert Strip in Summer",
            ["GROUND", "ROCK", "GRASS", "BUG"],
            ["ELECTRIC", "FAIRY", "FIGHTING", "FLYING", "NORMAL", "POISON", "PSYCHIC", "STEEL", "FIRE", "DARK", "GHOST"],
            ["WATER", "DRAGON"],
            ["ICE"]),
        new location_season("Desert Strip in Fall",
            ["GROUND", "ROCK", "GRASS", "GHOST"],
            ["BUG", "FAIRY", "FIGHTING", "FLYING", "NORMAL", "POISON", "PSYCHIC", "STEEL", "DARK"],
            ["ICE", "ELECTRIC", "FIRE", "WATER", "DRAGON"],
            ["NONE"]),
        new location_season("Desert Strip in Winter",
            ["GROUND", "ROCK", "DARK"],
            ["GRASS", "FAIRY", "FIGHTING", "NORMAL", "POISON", "PSYCHIC", "STEEL", "ICE", "GHOST"],
            ["BUG", "ELECTRIC", "FIRE", "WATER", "DRAGON", "FLYING"],
            ["NONE"])
    ],
    [
        new location_season("Fairy Island in Spring",
            ["BUG", "FAIRY", "FAIRY", "ELECTRIC", "FLYING", "GRASS", "GRASS", "POISON", "NORMAL", "PSYCHIC", "WATER"],
            ["FIGHTING", "FIRE", "GROUND"],
            ["STEEL", "ROCK", "GHOST"],
            ["DRAGON", "ICE"]),
        new location_season("Fairy Island in Summer",
            ["BUG", "FAIRY", "ELECTRIC", "ELECTRIC", "FLYING", "GRASS", "POISON", "NORMAL", "PSYCHIC", "WATER", "FIRE"],
            ["FIGHTING", "GHOST", "GROUND"],
            ["STEEL", "ROCK"],
            ["DRAGON", "ICE"]),
        new location_season("Fairy Island in Fall",
            ["BUG", "FAIRY", "ELECTRIC", "FLYING", "GRASS", "POISON", "NORMAL", "PSYCHIC", "WATER", "GHOST"],
            ["FIGHTING", "FIRE", "GROUND"],
            ["STEEL", "ROCK"],
            ["DRAGON", "ICE"]),
        new location_season("Fairy Island in Winter",
            ["FAIRY", "ELECTRIC", "POISON", "NORMAL", "PSYCHIC", "WATER"],
            ["FIGHTING", "GHOST", "GROUND", "BUG", "FLYING", "GRASS"],
            ["STEEL", "ROCK", "ICE", "FIRE"],
            ["DRAGON"])
    ],
    [
        new location_season("Paradise Island in Spring",
            ["BUG", "ELECTRIC", "FAIRY", "FIRE", "FLYING", "GRASS", "GROUND", "POISON", "WATER", "FAIRY", "GRASS"],
            ["DARK", "DRAGON", "NORMAL", "ROCK", "PSYCHIC", "STEEL"],
            ["FIGHTING", "ICE", "GHOST"],
            ["NONE"]),
        new location_season("Paradise Island in Summer",
            ["BUG", "BUG", "ELECTRIC", "ELECTRIC", "FAIRY", "FIRE", "FIRE", "FLYING", "GRASS", "GROUND", "POISON", "WATER"],
            ["DARK", "DRAGON", "GHOST", "NORMAL", "ROCK", "PSYCHIC", "STEEL"],
            ["FIGHTING", "ICE"],
            ["NONE"]),
        new location_season("Paradise Island in Fall",
            ["BUG", "ELECTRIC", "FAIRY", "FIRE", "FLYING", "GRASS", "GROUND", "POISON", "WATER", "GHOST"],
            ["DARK", "DRAGON", "NORMAL", "ROCK", "PSYCHIC", "STEEL"],
            ["FIGHTING", "ICE"],
            ["NONE"]),
        new location_season("Paradise Island in Winter",
            ["ELECTRIC", "FAIRY", "GROUND", "POISON", "WATER", "DARK"],
            ["BUG", "DRAGON", "GHOST", "NORMAL", "ROCK", "PSYCHIC", "STEEL", "FIRE", "FLYING", "GRASS", "ICE"],
            ["FIGHTING"],
            ["NONE"])
    ],
    [
        new location_season("Mud Baths in Spring",
            ["BUG", "FIRE", "GROUND", "POISON", "WATER", "GRASS"],
            ["DARK", "DRAGON", "ELECTRIC", "FLYING", "FAIRY", "NORMAL", "ROCK"],
            ["FIGHTING", "ICE", "PSYCHIC", "STEEL"],
            ["NONE"]),
        new location_season("Mud Baths in Summer",
            ["BUG", "BUG", "FIRE", "FIRE", "ELECTRIC", "GROUND", "POISON", "WATER"],
            ["DARK", "DRAGON", "FLYING", "GRASS", "NORMAL", "ROCK"],
            ["FAIRY", "FIGHTING", "ICE", "PSYCHIC", "STEEL"],
            ["NONE"]),
        new location_season("Mud Baths in Fall",
            ["BUG", "FIRE", "GROUND", "POISON", "WATER"],
            ["DARK", "DRAGON", "ELECTRIC", "FLYING", "GRASS", "NORMAL", "ROCK"],
            ["FAIRY", "FIGHTING", "ICE", "PSYCHIC", "STEEL"],
            ["NONE"]),
        new location_season("Mud Baths in Winter",
            ["GROUND", "POISON", "WATER", "DARK"],
            ["BUG", "DRAGON", "ELECTRIC", "NORMAL", "ROCK", "FIRE", "ICE"],
            ["FAIRY", "FIGHTING", "PSYCHIC", "STEEL", "FLYING", "GRASS"],
            ["NONE"])
    ]
];




//need to make a function that takes a location/season object. Randomizes a number for which array to pull from (common type or uncommon type, etc)...
//then it needs to generate a random number based on how long the array is… and then … is it okay if a case is impossible to get? And then the array value will also be impossible?

function randomize_general (location) {
    var type_rarity = Math.random();
    var poke_type;
    if (type_rarity < 0.6) {
        //console.log("Continue with one of the " + location.common_types.length + " COMMON types");
        var common_type = Math.floor(Math.random() * location.common_types.length);
        poke_type = location.common_types[common_type];

    }
    else if (type_rarity >= 0.6 && type_rarity < 0.85) {
        //console.log("Continue with one of the " + location.uncommon_types.length + " UNCOMMON types");
        var uncommon_type = Math.floor(Math.random() * location.uncommon_types.length);
        poke_type = location.uncommon_types[uncommon_type];

    }
    else if (type_rarity >= 0.85 && type_rarity < 1) {
        //console.log("Continue with one of the " + location.rare_types.length + " RARE types");
        var rare_type = Math.floor(Math.random() * location.rare_types.length);
        poke_type = location.rare_types[rare_type];

    }
    else {
        console.log("Something went wrong with choosing the rarity of the type.");
    }

    var poke_rarity = randomize_rarity();
    var rarity_string = rarity_to_string(poke_rarity);
    console.log("You should spawn a " + poke_type + " with " + rarity_string + " spawn rate.");
    return [poke_type, poke_rarity];
}

function go(){
    var place = document.getElementById("select_place").value;
    console.log("User input: " + place);
    var place_int = parseInt(place, 10);

    var time = document.getElementById("select_season").value;
    console.log("User input: " + time);
    var time_int = parseInt(time, 10);

    var poke_info = randomize_general(location_array[place_int][time_int]);

    var rand_poke = randomize_poke(poke_info[0], poke_info[1], location_array[place_int][time_int].never_found);

    console.log(rand_poke.name);

    //now to randomize some stats for the Pokemon
    var sex = randomize_sex(rand_poke.fem_chance);
    var abil = randomize_x_from_array(1, rand_poke.abilities);
    var eggmoves = randomize_eggmoves(rand_poke.egg_moves);

    console.log(sex + abil);
    console.log(eggmoves);

}


function test() {
    var place = document.getElementById("select_place").value;
    console.log("User input: " + place);
    var place_int = parseInt(place, 10);

    var time = document.getElementById("select_season").value;
    console.log("User input: " + time);
    var time_int = parseInt(time, 10);

    var myArray = new Array;
    for(var i = 0; i < 10 ; i++){
        myArray.push(0);
    }
    for (var i = 0; i < 10000; i++){
        var info = randomize_general(location_array[place_int][time_int]);
        myArray[info[1]]++;
    }
    myArray.forEach(function(element){
        console.log(element + " " + (element/10000));
    });

}

