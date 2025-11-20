const expensive= ()=>{
    console.log("Expensive");
}


const betterExpensive=() =>{
    throttle(expensive,5000);
}

const throttle= (func,limit) =>{
    let flag = true;

    return function(){
        let context= this, 
        args=arguments;

            if(flag)
            {
                func.apply(this,args);
                flag=false;

                setTimeout(()=>{
                    flag=true;
                },limit);
            }
    }
}