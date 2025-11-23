console.log(this);

function logging() {
  console.log(this); // in strict mode it is undefined
}

() => {
  console.log(this + "inside arrow"); // undefined in strict mode, this substituion whenever null or undefined it becomes global object
};

const obj = {
  firstName: "Shantvanu",
  lastName: "Mutha",
  age: 23,
  city: "Jodhpur",
  state: "Rajasthan",
  printName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// obj.printName();

const obj2 = {
  city: "Surat",
  state: "Gujarat",
  printAddress: function () {
    return this.city + " in " + this.state;
  },
};
// obj2.printAddress();

const line = obj.printName() + " from " + obj2.printAddress();
const line2 = obj.printName() + " from " + obj2.printAddress.call(obj);
console.log(line);
console.log(line2);

// arrow function always takes the value of its lexical parent or scope, which was obj3 but by call we changed it to obj..

const obj3 = {
  firstName: "shantvanu",
  lastName: "Mutha",
  getAge: function () {
    const x = () => {
      return this.age;
    };
    return x();
  },
};

const line3 =
  obj.printName() +
  " from " +
  obj2.printAddress.call(obj) +
  " aged " +
  obj3.getAge.call(obj);
console.log(line3);
