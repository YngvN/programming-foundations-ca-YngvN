

var guitarBrand = document.querySelector(".guitar-name");
var guitarMaterial = document.querySelector(".guitar-material");
var guitarTune = document.querySelector(".guitar-tuning");
var guitarCutaway = document.querySelector(".guitar-cutaway");
var guitarPrice = document.querySelector(".guitar-price");

var woodType = ["Birch", "Fir", "Mahogany"];
var tuning = 
    [{
        name: "Standard",
        notes: ["E", "A", "D", "G", "B", "E"]
    },
    {
        name: "Open D",
        notes: ["D", "A", "D", "F#", "A", "D"]
    },
    {
        name: "Open C",
        notes: ["C", "G", "C", "G", "C", "E"]
    }];

var guitars = 
    [{
        name: "Martin",
        material: woodType[0] + ", " + woodType[1],
        tuning: tuning[0].name,
        cutaway: true,
        price: 700
    },
    {
        name: "Furch",
        material: woodType[2],
        tuning: tuning[1].name,
        cutaway: false,
        price: 500

    },
    {
        name: "Gibson",
        material: woodType[1] + ", " + woodType[2],
        tuning: tuning[2].name,
        cutaway: false,
        price: 200
    }];

function displayInfo(index){

    var selectedGuitar = guitars[index];

    var brandName = selectedGuitar.name;
    var material = selectedGuitar.material;
    var tuning = selectedGuitar.tuning;
    var cutaway = selectedGuitar.cutaway;
    var price = selectedGuitar.price;
    
    if (cutaway === true) {
        cutaway = "Has cutaway";
    } else {
        cutaway = "Doesn't have cutaway";
    }

    guitarBrand.innerHTML = "<p class=display-info>" + brandName;
    guitarMaterial.innerHTML = "<p class=display-info>" + material;
    guitarTune.innerHTML = "<p class=display-info>" + tuning;
    guitarCutaway.innerHTML = "<p class=display-info>" + cutaway;
    guitarPrice.innerHTML = "<p class=display-info resale>" + "$ " + price;
};       




