let name1={
    firstName: "Shantvanu",
    lastName:"Mutha",
    age:23
}

let name2 = {
    firstName:"Shubham",
    lastName:"Singh",
    age:25
}

function printName(){
    console.log(this.firstName, this.lastName, this.age);
}

printName.call(name1);
printName.call(name2);