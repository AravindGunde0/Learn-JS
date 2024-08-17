
// const obj=new Object;

const obj={}
// obj.name="Aravind";

console.log(obj);

const obj1={
    myname:{
        myname1:{
            name:"Aravind",
            age:25,
        }
    }
}
console.log(obj1.myname.myname1.age);

const obj2={1:'a',2:'b'};

const obj3={3:'c',4:'d'};

// const obj4 ={obj2,obj3};

// const obj4=Object.assign(obj2,obj3);//if first parameter is object is manupilated to changes to assign method 

const obj5=Object.assign({},obj2,obj3);//always emply object is used in assgin method because  first parameter which is empty object is always updated so empty obj can be returned


console.log(obj5);// { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj2);// { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj6 ={...obj2,...obj3};
console.log(obj6);

console.log(Object.keys(obj2));//These return keys in array 
console.log(Object.values(obj2));
console.log(Object.entries(obj2));

console.log(obj2.hasOwnProperty(1));//THis return t or f as search for the key in object