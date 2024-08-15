const num=100;

const nnum=new Number(100);
console.log(nnum);

console.log(nnum.toString().length);
console.log(nnum.toFixed(3));//This gives precision values after decimal

const onum=256.25;
console.log(onum.toPrecision(4));

const hundreds = 800000;
console.log(hundreds.toLocaleString('en-IN'));//THis prints the value giving comma's as per us stands and adding en-IN changes to Indian


//.............................Maths..............................................
console.log(Math);
console.log(Math.abs(-10));
console.log(Math.round(4.2));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.max(8,5,9,84,2));
console.log(Math.min(8,5,9,84,2));

console.log(Math.random());//This gives any random number betweeen 0 and 1
console.log((Math.random()*10)+1);//This gives a value from 1 to 9 as mutiplying with 10 moves decimal to next postion and adding +1 to 0.01gives value 1

const max=20;
const min =10;
console.log((Math.floor(Math.random()*(max-min+1)+min)));//floor gives upround value and random creates number 1 to 9 and max-min+1 +min gives number more than 10