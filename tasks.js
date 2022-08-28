// TASK 1

const numbers = [1, -2, -4, 3, 5, -7, 10];

const positiveNumbers = numbers.filter((number) => {
  return number > 0;
});

const sumOfPositiveNumbers = positiveNumbers.reduce((total, currentValue) => {
  return total + currentValue;
}, 0);

console.log(sumOfPositiveNumbers);

// TASK 2

const strings = ["a", "b", "b", "a", "c", "b", "b", "c", "a"];

const sumOfSameStrings = strings.reduce((total, currentString) => {
  return { ...total, [currentString]: (total[currentString] || 0) + 1 };
}, {});

console.log(sumOfSameStrings);

// TASK 3

class car {
  constructor(brand, model, speed = 0, motion = "The car is not moving") {
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.motion = motion;
  }

  check_motion = () => {
    if (this.speed === 0) {
      console.log("The car is not moving");
    } else {
      console.log("The car is moving");
    }
  };

  accelerate = () => {
    console.log(0 + this.speed);
  };

  break = () => {};
}

const car1 = new car("Ford", "Mustang", 80, "The car is not moving");

car1.accelerate();

// TASK 4
const a = 30;
const b = 200;

const promise = new Promise((resolve, reject) => {
  if ((typeof a == "number") & (typeof b == "number")) {
    resolve("it is not undefined");
  }
  reject("it is undefined");
});

promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
