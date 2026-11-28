let name = "vaishnav";
function greet(){
    console.log ("hey" + name); 
}

greet();



function outerFunction(){
    let message ="hey vaishnav";

    function innerFunction(){
        console.log(message);
    }
    return innerFunction;
}

const result= outerFunction();
result();

//Create a counter using closures.

function counter(){
    let count= 0;
    return function(){
        count ++;
        console.log(count);
    };
}

const vaish=counter();
vaish();
vaish();
vaish();
vaish();