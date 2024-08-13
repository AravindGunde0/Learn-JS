const name="Aravind";
const cnt=50;

//console.log(name + cnt +"Value");//Old way and not efficent to read

console.log(`My name is ${name} and cont is ${cnt}`);


// String Declaration
let a="Bunny";

let str=new String("Aravind")

console.log(str[2]);
console.log(str.__proto__);

console.log(str.length);
console.log(str.toLowerCase());


console.log(str.charAt(2));
console.log(str.indexOf('a'));

console.log(str.substring(2,8));
console.log(str.slice(0,3));

let newstr="      Vinny      ";
console.log(newstr.trim());

let mail="aravind@bunny.com";

console.log(mail.replace("bunny","gmail"));//This replaces bunny wth gmail

console.log(mail.includes("gmail"));//this find the string in string and gives true or false
console.log(mail);

console.log(mail.split("@"));//This split the string in array where passed arugument is the reference point to split




