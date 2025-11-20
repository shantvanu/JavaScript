function a(){
    b();
    function b(){
        console.log(x);
    }
}

var x=100;
a();