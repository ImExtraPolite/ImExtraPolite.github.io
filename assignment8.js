let meal = "breakfast";

switch (meal) {
  case "breakfast":
    console.log("coffee + bagel + Sandwich");
    break;
  case "lunch":
    console.log("coffee + bagel + Sandwich");
    break;
  case "dinner":
    console.log("pasta");
    break;
  default:
    console.log("No food");
}

const tip = 66;
console.log(bill(tip));

function bill(tip) {
  tip > 30 && tip < 300
    ? console.log("Your tip is", tip * 0.15)
    : console.log("Your tip is ", tip * 0.2);
}

calcAverage = (score1, score2, score3) => {
  return score1 + score2 + score3 / 3;
};

avgNets = calcAverage(44, 23, 71);
avgKnicks = calcAverage(65, 54, 49);

function checkWinner(avgNets, avgKnicks) {
  if (avgKnicks > avgNets) {
    console.log("Knicks win (", avgNets, "vs", avgKnicks, ")");
  } else if (avgNets > avgKnicks) {
    console.log("Nets win (", avgNets, "vs", avgKnicks, ")");
  } else {
    console.log("");
  }
}

console.log(avgNets);

console.log(checkWinner(avgNets, avgKnicks));
