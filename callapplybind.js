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

function printName(city,state){
    console.log(this.firstName, this.lastName, this.age, city, state);
}

// call method is used to borrow a function 

printName.call(name1, "Jodhpur", "Rajasthan");
printName.call(name2,"Patna","Bihar"); 

// now in apply we just pass these arguments in an array instead of writing them separately.. see below

printName.apply(name1,["Jodhpur","Rajasthan"]);
printName.apply(name2,["Patna","Bihar"]);

//Bind method is somewhat similar to call method, instead of executing the function instantly it keeps the copy of that function with the object to call it later

let printMyName = printName.bind(name1,"Jodhpur","Rajasthan");
console.log(printMyName);
printMyName();


