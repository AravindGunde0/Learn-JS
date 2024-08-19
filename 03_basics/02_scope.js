let a =10;//Value of let and const can be accessed only in scope if declared in scope and globally if declared globally 
const b=20;
var c=30;//Value of var can be accessed globally

{}//This is called a scope

//The scope of windows and any code editor node is different



//=================Nested Scope================================================
function one(){
    username="Aravind";
    function two(){
        website="Youtube";
        console.log(username)
    }
    // console.log(website);
    two();
    
}
one();

//++++++++++++++++++++++++++++Need to KNow++++++++++++++++++++++++

addone(5);//This can be used before function
function addone(num){
    return num+1;
}

//addtwo(5)// This cannot be used before function this is declared as variable in function so cannot be accessed before declaration
let addtwo=function(num){
    return num+2; 
}

console.log(addone(5));
console.log(addtwo(5));