const mysym= Symbol("key1");


const myjs={
    name:"Aravind",
    age:24,
    [mysym]:"key2",
    mail:"aravind.gunde@gmail.com"
}

console.log(myjs.name);
console.log(myjs["name"]);//Always key is a string while retriving data from object by []braces

console.log(myjs[mysym]);
console.log(typeof myjs[mysym]);//Always while retriving use  [] for key in object to make it as symbol else it would be a string.
console.log(typeof myjs[mysym]);

//Object Freeze

// Object.freeze(myjs);

myjs.name="Bunny";

console.log(myjs);

//Functions as variables in JS

myjs.greeting=function(){
    console.log("Hello World");
    
};
myjs.greeting2=function(){
    console.log(`Hello World,${this.name}`);
    
};

myjs.greeting();
console.log(myjs.greeting2())




