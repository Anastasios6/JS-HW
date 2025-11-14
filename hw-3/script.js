//1.
const cars = [
    {
        name: "Audi",
        model: "A series",
        amountOfModels: 5,
        points: 100,
    },
    {
        name: "Mercedes",
        model: "S class",
        amountOfModels: 4,
        points: 70,
    },
    {
        name: "BMW",
        model: "X series",
        amountOfModels: 7,
        points: 23,
    },

];


function calculateRank(points) {
    let rank;
    if (points === 100) {
        rank = 1;
        // console.log("Placed at 1st place");

    }
    else if (points >= 66) {
        rank = 2;
        // console.log("Placed at 2nd place");
    }
    else if (points <= 33) {
        rank = 3;
        // console.log("Placed at 3rd place");
    }
    else {
        rank = null;
    }
    return rank;
}

function printRank(grade) {
    for (let i = 0; i < cars.length; i++) {
        calculateRank(cars[i].points);
        grade = calculateRank(cars[i].points);
        console.log(`${cars[i].name} Placed at ${grade} place`);
    }
    return grade;
}
let grade = 0;
printRank(grade);

const Food = [
    {
        name: "Pizza",
        type: "Margherita",
        amountOfFood: 13,
        rating: 100,
    },
    {
        name: "Spaghetti",
        type: "Bolognese",
        amountOfFood: 54,
        rating: 70,
    },
    {
        name: "Burger",
        model: "Cheeseburger",
        amountOfFood: 100,
        rating: 24,
    },

];
console.log("----------------");

function printRankFood(grade) {
    for (let i = 0; i < Food.length; i++) {
        calculateRank(Food[i].rating);
        grade = calculateRank(Food[i].rating);
        console.log(`${Food[i].name} Placed at ${grade} Placed`);
    }
    return grade;
}
printRankFood(grade);


const CountriesCities = [
    {
        Contry: "Germany",
        capitalCity: "Berlin",
        Population: 3.78,

    },
    {
        Contry: "Macedonia",
        capitalCity:"Skopje",
        Population: 1.8

    },
    {
        Contry: "Serbia",
        capitalCity: "Beograd",
        Population: 6.8,

    },
    {
        Contry: "Greece",
        capitalCity: "Athens",
        Population: 10.4,

    },
    {
        Contry: "Bulgaria",
        capitalCity: "Sofia",
        Population: 6.44,

    },
    {
        Contry: "Hungary",
        capitalCity: "Budapest",
        Population: 9.56,

    },
    {
        Contry: "France",
        capitalCity: "Paris",
        Population: 66.99,

    },
    {
        Contry: "United Kingdom",
        capitalCity: "London",
        Population: 66.65,

    },
    {
        Contry: "Ukraine",
        capitalCity: "Kyev",
        Population: 60.36,

    },
    {
        Contry: "Poland",
        capitalCity: "Warsaw",
        Population: 37.97,

    }
]
for(let i = 0; i <CountriesCities.length; i++) {
    console.log(CountriesCities[i]);
}

function mostPopulated (max1, max2, max3) {
    max1 = 0;
    max2 = 0;
    max3 = 0;
    let ind1 = 0,ind2 = 0,ind3 = 0;
    for(let i = 0; i <CountriesCities.length; i++) {
        if (max1 < CountriesCities[i].Population ){
            max1 = CountriesCities[i].Population
            ind1 = i;
        }
    }
    for(let i = 0; i <CountriesCities.length; i++) {
        if (max2 <CountriesCities[i].Population && max1 > CountriesCities[i].Population ){
            max2 = CountriesCities[i].Population
            ind2 = i;
        }
    }

    for(let i = 0; i <CountriesCities.length; i++) {
        if (max3 < CountriesCities[i].Population && max2 > CountriesCities[i].Population ){
            max3 = CountriesCities[i].Population
            ind3 = i;
        }
    }
    return [ind1, ind2, ind3];
}
const [ind1, ind2, ind3] = mostPopulated();

mostPopulated (ind1, ind2, ind3);

console.log(CountriesCities[ind1].capitalCity);
console.log(CountriesCities[ind2].capitalCity);
console.log(CountriesCities[ind3].capitalCity);

//Najpopularen i top 3 najnaseleni gradovi
let sum = 0, prosek = 0;
for (let i = 0; i <CountriesCities.length; i++) {
    sum+=CountriesCities[i];
}

//Prosek
prosek = sum/CountriesCities.length;