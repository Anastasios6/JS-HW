let ime = "Audi";
let model = " A3";
let proizvodstvo = 2007;
console.log(ime + model + proizvodstvo);

let registracija = true;
console.log("Registrirano");

let cena = 6800;

if (cena <= 6000) {
  console.log("Prodadeno");
} else {
  console.log("Na prodazba");
}

console.log("----------------");

let a = 111;

if (a % 2 === 0) {
  console.log(a + " e paren broj");
} else {
  console.log(a + " e neparen broj");
}

let ime2 = "Goran ";
let vozrast = 68;
console.log(ime2 + " ima " + vozrast + " godini");
let stazh = 35;
console.log("Goran ima " + stazh + " godini raboten stazh");

if (vozrast >= 64 && stazh >= 15) {
  console.log("Goran ima pravo na starosna penzija ");
} else {
  console.log("Goran nema pravo na starosna penzija");
}

let ime3 = "stefan";
vozrast = 24;
console.log("Stefan ima " + vozrast + " godini");
stazh = 2;
console.log(
  "Stefan ima " +
    vozrast +
    " godini" +
    " i raboten stazh od" +
    stazh +
    " godini"
);

if (vozrast >= 64 && stazh >= 15) {
  console.log("Stefan ima pravo na starosna penzija");
} else {
  console.log("stefan nema pravo na starosna penzija");
}

let logged = true;
let verified = false;
if (logged && verified) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

n = 25;
if (n % 3 === 0 && n % 5 === 0) {
  console.log("fizzbuzz");
} else if (n & 3 === 0) {
  console.log("fizz");
} else if (n % 5 === 0) {
  console.log("buzz");
}
