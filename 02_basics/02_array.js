const heros=[1,2,3];
const num=[4,5,6];

// heros.push(num);//THis makes adding array in array and concat does the same
console.log(heros);

const newab=[...heros,...num];
console.log(newab);

const a=[1,3,3,[3,4],[5,[9,9]]];
console.log(a.flat(Infinity));

console.log(Array.isArray("Aravind"));// Returns true or false where check it is a array or not
console.log(Array.from("Aravind"));
console.log(Array.from({name:"Aravind"}));//it cannott cconvert object ket value pars into  array


let aa=100;
let bb=200;
let cc=300;

console.log(Array.of(aa,bb,cc));
