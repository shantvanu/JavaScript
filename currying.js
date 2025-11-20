let multiply = function(x,y){
    console.log(x*y);
}

// Basically currying is to make more methods out of the given method..
// the first currying method bind : 
multiplyByTwo = multiply.bind(this,2); 
multiplyByTwo(10);

/* 
Bind(this, 2) → the this here is whatever the current execution context’s this is (global object or                                          undefined in strict mode).
But since your function doesn’t reference this, it doesn’t matter. The binding only affects the arguments. 
*/

multiplyByThree = multiply.bind(this,3);
multiplyByThree(10);


// the second method to curry is using closures:

let closureMultiply = function(x)
{
    return function(y)
    {
        console.log(x*y);
    }
}

// this above function is same as the above first multiply method, just using closure here.

let multiply2= closureMultiply(2)(10);

let multiply3= closureMultiply(3);
multiply3(10);
