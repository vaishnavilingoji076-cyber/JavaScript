// if else if else


let age=18;

if (age>=18){
    console.log('adult');
}


let score=75;

if(score >=90){
    console.log("A")
} else if (score>= 80){
    console.log("B")
} else if (score >= 70){
    console.log("C")
} else{
    console.log(Fail);
}

// for loop

for (let i=1; i <10; i++){
    console.log(i+1)
}

let sum = 0;
for (let i = 1; i <= 10; i++) sum += i;
console.log(sum); // 55


//while
let count=0;
while(count <8){
    console.log(count);
    count++;
}

// do while
let i =100;
do{
    console.log(i);
    i++;
} while(i <5);