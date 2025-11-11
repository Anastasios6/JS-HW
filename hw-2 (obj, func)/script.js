

const Car1 = {
    Name: "Audi",
    Model: "A3",
    year: 2006,
    Driven: 230000,
    Color: "black",
    Price: 5000,
};





console.log("name", Car1.Name)
console.log("Price", Car1.Price)
console.log(Car1.Driven, Car1.year, "Driven amount and year");



console.log("------------");
const Car2 = {
    Name: "Toyota",
    Model: "Yaris",
    year: 2006,
    Driven: 260000,
    Color: "gray",
    Price: 4500,

}
console.log("name", Car2.Name)
console.log("Price", Car2.Price);
console.log("Driven amount and year", Car2.Driven, Car2.year);



console.log("------------");


const Car3 = {
    Name: "Golf",
    Model: 7,
    year: 2010,
    Driven: 180000,
    Color: "dark blue",
    Price: 8000,

}
console.log("name", Car3.Name)
console.log("Price", Car3.Price)

console.log("Driven amount and year", Car3.Driven, Car3.year);

console.log("------------");

const Car4 = {
    Name: "Mercedes",
    Model: "A-class",
    year: 2018,
    Driven: 180000,
    Color: "Gray",
    Price: 15000,

}
console.log("name", Car4.Name)
console.log("Price", Car4.Price)

console.log("Driven amount and year",
    Car4.Driven, Car4.year
);


console.log("------------");
const Car5 = {
    Name: "Mercedes Maybach",
    Model: "S-class",
    year: 2015,
    Driven: 100000,
    Color: "Dark Gray",
    Price: 30000,

}
console.log("name", Car5.Name)
console.log("Price", Car5.Price)
console.log("Driven amount and year", Car5.Driven, Car5.year);

console.log("------------");

//functions

//1. age verification

const name = "Todor";
const age = 50;

function ageVerification(personAge) {
    let ages;
    if (personAge >= 21) {
        console.log("You are allowed to enter");

    }
    else {
        console.log("You are not allowed to enter");

    }
    if (personAge > 65) {
        console.log("Too old to enter");

    }
    return ages;

}
const proverka = ageVerification(age);

console.log("------------");

//2. Female discount


const name2 = "Sarah"
const gender = "Female"
function Verification(personGender) {
    let genders;
    if (personGender = "Female") {
        console.log("You are granted 20% discount");

    }
    else {
        console.log("You are not granted any discount")
    }
    return genders;
}
const proverka2 = Verification(gender);

console.log("------------");
// 3.Sunday 50% discount on people over the age of 25 and married 

const name3 = "Nikola";
const age3 = 26;
const married = true;

function discountCalculation2(age3, married) {
    let discounts;

    if (age3 > 25 && married == true) {
        console.log("You received 50% discount on your items");


    }
    else {
        console.log("You are paying full price");

    }
    return discounts;
}
const proverka3 = discountCalculation2(age3, married);
console.log("------------");

//4. voucher discounts 
//discounts by percentage
const DISCOUNT10 = 10;
const DISCOUNT20 = 20;
const DISCOUNT50 = 50;



function discountCalculation(personAge, basePrice) {
    let discountedPrice;
    if (personAge <= 18) {
        discountedPrice = basePrice - (basePrice * DISCOUNT10) / 100;
        console.log("You have received a 10% discount");

    } else if (personAge <= 55) {
        discountedPrice = basePrice - (basePrice * DISCOUNT20) / 100;
        console.log("You have received a 20% discount");

    }
    else if (personAge > 60) {
        discountedPrice = basePrice - (basePrice * DISCOUNT50) / 100;
        console.log("You have received a 50% discount");
    }
    return discountedPrice;
}

let personAge = 15;
let basePrice = 4000;
const popustCena = discountCalculation(personAge, basePrice);
console.log("Your total now is " + popustCena);



console.log("------------");
// 5. Daily discounts by percentage
let buyer = "George";
let dayOfPurchase = "thursday";
let priceBuyer = 1000;

const MONDAY = 10;
const WEDNESDAY = 15;
const FRIDAY = 20;


function discountByDay(dayOfPurchase, priceBuyer) {
    let discountedPrice2;
    if (dayOfPurchase == "Monday") {
        discountedPrice2 = priceBuyer - (priceBuyer * MONDAY) / 100;
    }
    else if (dayOfPurchase == "Wednesday") {
        discountedPrice2 = priceBuyer - (priceBuyer * WEDNESDAY) / 100;
    }
    else if (dayOfPurchase == "Friday") {
        discountedPrice2 = priceBuyer - (priceBuyer * FRIDAY) / 100;
    }
    else (
        discountedPrice2 = null
    )
    return discountedPrice2;
}
const DiscountPrice = discountByDay(dayOfPurchase, priceBuyer);
console.log("Your total now with the " + dayOfPurchase + " discount is "  + DiscountPrice );












