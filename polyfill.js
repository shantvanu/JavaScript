let name ={
    firstName:"Shantvanu",
    lastName:"Mutha",
    age:23
}

let printName = function(city,state){
    console.log(this.firstName + " " + this.lastName + " " + this.age +" "+ city +" "+ state);
}

// printName.call(name);

let printMyName = printName.bind(name,"Jodhpur");
printMyName("Rajasthan");


Function.prototype.mybind = function(...args){
    let obj=this,
    params=args.slice(1);
    return function(...args2){
        obj.apply(args[0],[...args2,...params]);
    }
}

let printMyName2= printName.mybind(name,"Rajasthan");
printMyName2("Jodhpur");