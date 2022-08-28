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
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.speed = 0;
    this.motion = "The car is not moving";
  }

  check_motion = () => {
    if (this.speed === 0) {
      ("The car is not moving");
    } else {
      ("The car is moving");
    }
  };

  accelerate = (speed) => {
    this.speed += speed;
  };

  break = (speed) => {
    if (speed > this.speed) {
      this.speed = 0;
    } else {
      speed -= this.speed;
    }
  };

  emergency_brake = () => {
    this.speed = 0;
  };

  status = () => {
    return console.log(
      `The car ${this.brand} ${this.model} is moving at ${speed} km/h`
    );
  };
}

const car1 = new car("Ford", "Mustang", 80, "The car is not moving");

car1.status();

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
