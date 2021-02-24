// BMI question
// question1
let lucasBMI = 78 / 1.69 ** 2;
let johnBMI = 95 / 1.88 ** 2;

let lucasHigherBMI = lucasBMI > johnBMI;

console.log(lucasHigherBMI);

// question 2
let lucasBMI2 = 95 / 1.88 ** 2;
let johnBMI2 = 85 / 1.76 ** 2;

let lucasHigherBMI2 = lucasBMI2 > johnBMI2;

console.log(lucasHigherBMI2);

// Temperature Converter

let celcius = 30;

const Fconvert = (celcius * 9) / 5 + 32;

console.log(celcius + "C =", Fconvert + "F");

let fehrenheit = 86;

const Cconvert = ((fehrenheit - 32) * 5) / 9;

console.log(fehrenheit + "F =", Cconvert + "C");

// Basketball game

const team1 = "Knicks";
const team2 = "Nets";

const t1game1 = 95;
const t1game2 = 108;
const t1game3 = 89;

const t2game1 = 88;
const t2game2 = 91;
const t2game3 = 110;

let t1average = t1game1 + t1game2 + t1game3 / 3;
let t2average = t2game1 + t2game2 + t2game3 / 3;

if (t1average < t2average) {
  console.log(team1 + " average:", t1average, team2 + " Average:", t2average);
  console.log(team2, "is the winner!");
} else if (t1average > t2average) {
  console.log(team1 + " average:", t1average, team2 + " Average:", t2average);
  console.log(team1, "is the winner!");
} else {
  console.log(team1 + " average:", t1average, team2 + " Average:", t2average);
  console.log("Tie between " + team1 + " and " + team2);
}
