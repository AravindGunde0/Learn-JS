//Immediately Invoked Function Expressions


//Named IIFE
(function chai(){
    console.log("DATABASE CONNECTED");
    
})();
//TO write iife func just after a iife func use ; which helps to break else error occurs

//Arrow IIFE //Unnamed IIFE
(()=>{
    console.log("DATABASE2 CONNECTED"); 
})();

((num)=>{
    console.log(`DATABASE2 CONNECTED ,${num}`); 
})(12);


//()()//function defination() and function execution()

//The function immediately executed is iife func and to avoid global scope pollution which may be var and obj