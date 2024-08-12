// Primitive Datatypes
// 7types:String, Number, Boolean, Null, undefined, Symbol, BigINT,

//These are call by value where a copy is given for changes


const num=100;
const decn=100.3;
const dnll=null;
let email; // undefined

const id=Symbol('123');
const id2=Symbol('123');
console.log(id==id2);// Symbols are not equal

const bigNumb=1348539098492849n;



// Non Primitive Datatypes or Referencce Datatypes
// 3types:Array, Objectes, Functions.

const heros=["Aravind","Vinny","Doga"];// Arrray
let obj={
    name:"Aravind",
    age:24,
    s:"m",
} // Object

const myFun= function(){
    console.log("Hello World");
};
myFun();




//Type of Function give the type of datatype

console.log(typeof myFun);//function
console.log(typeof obj);//object
console.log(typeof heros);//object

//If you search for type  of the below
//undefined==>undefined
//null-->object
//Boolean-->Boolean
//Number-->Number
//String--> String
//objecct-->object

