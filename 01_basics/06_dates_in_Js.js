const dates=new Date();
console.log(dates.toString());
console.log(dates.toDateString());
console.log(dates.toLocaleString());
console.log(dates.toLocaleDateString());

console.log(typeof dates);// Datatype of date is object


const mycustomdate=new Date(2023,0,23);

const customdate=new Date(2023,0,23,5,40,59);
const mdate=new Date('2023-5-4');
console.log(mdate.toLocaleString());

let n=Date.now();
console.log(n);//This gives the millisec from 1 jan 1970 
console.log(customdate.getTime());

console.log(Math.floor(Date.now()/1000));//This gives current time milli sec from constant time and dividing by 1000 to give in sec and floor to roundoff that decimals


let ndate=new Date();
console.log(ndate);
console.log(ndate.getDay());
console.log(ndate.getMonth());

ndate.toLocaleString('default',{
    weekday:"long",
})







