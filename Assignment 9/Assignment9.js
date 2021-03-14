function calcTip(billAmount) {
  let tip;
  if (billAmount >= 50 && billAmount <= 300) {
    tip = billAmount * 0.15;
  } else {
    tip = billAmount * 0.2;
  }
  return tip;
}

const tipAmount = calcTip(100);
console.log(tipAmount);
const bills = [125, 555, 44];
let tips = [];

for (let i = 0; i < bills.length; i++) {
  let tip = calcTip(bills[i]);
  tips.push(tip);
}
console.log(tips);

let total = [];
for (let i = 0; i < bills.length; i++) {
  let totalAmount = bills[i] + tips[i];
  total.push(totalAmount);
}
console.log(total);

// A2
const john = {
  firstName: "John",
  lastName: "Willams",
  birthYear: 1996,
  job: "student",
  friends: ["Mike", "Jack", "Peter"],
  calAge: function () {
    this.age = 2021 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${john.firstName} is a ${john.calAge} years old, and he has a/no driver's license`;
  },
};

console.log(john.getSummary, john.calAge);

// B

const johnS = {
  fullName: "John Smith",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    let bmi = this.mass / (this.height * this.height);
    this.bmi = bmi.toFixed(1);
  },
};

const lucasM = {
  fullName: "Lucas Miller",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    let bmi = this.mass / (this.height * this.height);
    this.bmi = bmi.toFixed(1);
  },
};

johnS.calcBMI();
lucasM.calcBMI();

console.log(johnS);
console.log(lucasM);
