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




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Memory 

//stack(primitive)
//heap(non-primitive)


//stack--When stack memory is used, the variable is of copy value
//heap--When heap memory is used, the variable is of reference valuee where it changes original value

let myName="Aravind";
let nm=myName;
nm="Vinny"; //Created a copy and changes value in copy
console.log(myName);
console.log(nm);


let add={
    name:"bunny",
}
let dd=add;
dd.name="funny";//it is refered in heap memory and updated at the original value
console.log(add.name);
console.log(dd.name);
