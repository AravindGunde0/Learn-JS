

function sayMyName(){
    console.log("A");
    
}

sayMyName();

function addTwoNumbers(num1,num2){
    let result=(num1+num2);
    return result;
}
let res = addTwoNumbers(3,4);
console.log("Result:",res);


function userLogin(username){
    if(!username){//This !(not) is false as username is not passed in arugument so the username is undefine hence not username
        console.log("Please enter a username");
    }
    return `${username}, just logged in`;
}
let usersts=userLogin();
console.log(usersts);


function userLogin1(username="Sam"){
    if(!username){//This !(not) is false as username is not passed in arugument so the username is undefine hence not username
        console.log("Please enter a username");
    }
    return `${username}, just logged in`;
}
let usersts1=userLogin1("Aravind");
console.log(usersts1);


function myCartDetails(...num){
    return num;
}
console.log(myCartDetails(200,300,400))


const user={
    name:"Aravind",
    price:5500,
}
//============================Objecct+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function handleObject(anyobj){
    console.log(`My Name is ${anyobj.name} and price is ${anyobj.price}`)
}

// handleObject(user);
handleObject(
{
    name:"Aravind",
    price:5500,
});

//============================Array+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const newarr=[100,200,300];

function mysecnd(anyobj){
    console.log(anyobj);
}

// mysecnd(newarr);
mysecnd([100,200,300]);