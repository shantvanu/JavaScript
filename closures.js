function z(){
    var b=99;
function x(){
    var a=100;
    function y(){
        console.log(a,b);
    }
    y();
}
x();
}

// even if outside the function the a,b contains the lexical values in it..

z();