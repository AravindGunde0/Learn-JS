
const arr =[1,2,3,4,5];
console.log(arr[1]);

//Array copy creates a shallow ccopy of original and shares the same reference point

const arr2=new Array(1,2,3);
console.log(arr2[2]);

arr2.push(10);
console.log(arr2);

arr2.pop();
console.log(arr2);
arr2.unshift(10);
console.log(arr2);

arr2.shift();
console.log(arr2);

console.log(arr2.includes(2));//This return boolean value t or f where finds the elements in array
console.log(arr2.indexOf(3));//THis gives the index of element provides'

const newarr= arr2.join();
console.log(arr2);
console.log(newarr);//Join methoods makes a array into string with  comma separeted
console.log(typeof newarr);

//slice and Splice

console.log("A",arr2);

const myn=arr2.slice(0,2);//slice retrive the value from given range where ending range in not included andd array is not changed
console.log(myn);
console.log("after Slice",arr2);
const myn2=arr2.splice(0,2);//splice retrive the values from the given range and array is changed where elements retrived are removed 
console.log(myn2);
console.log("After Splice",arr2);



