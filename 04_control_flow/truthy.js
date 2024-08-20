//Falsy Values

// false, 0, -0, BigInt 0n, "",null, undefined, NaN

//Truthy Values
//"0", "false"," ", {},[],function(){},


//Checking empty array
let arr=[]
if(arr.length===0){
    console.log("Array is empty");
}
//Checking empty obj
 let obj={};
 if(Object.keys(obj).length===0){
    console.log("Object if empty");
 }


 //flase==0->true
 //0==""-> true
 //false==""->true
 //


 //Nullish Coalescing Operator (?)

 let val1;
// //  val1=5??10;
// val1=null??10;
// val1=undefined??15;
val1=undefined??15??20;

 console.log(val1);

 //? ternary operator         condition?true:false;
 tea=10;
 tea>15?console.log("greater than 15"):console.log("Less than 15");
 ;
 
 //??nullish coalescing operator
 val1=undefined??15??20;
 