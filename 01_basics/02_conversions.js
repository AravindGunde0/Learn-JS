let score="33";
console.log(typeof score);
console.log(typeof(score));
let valNum=Number(score);
console.log(typeof valNum);


let score1="33abc";
let valNum1=Number(score1); //Converting string to Number
console.log(typeof valNum1);// Gives number but it is NaN
console.log(valNum1);// This line prints NaN


let a=null;
let num=Number(a); //Converting null to Number becomes 0
console.log(typeof num);// Gives number but it is 0
console.log(num);// This line prints 0


let b=undefined;
let n=Number(b); //Converting undefined to Number
console.log(typeof n);// Gives number but it is NaN
console.log(n);// This line prints NaN


let c="Aravind";
let z=Number(c); //Converting string to Number
console.log(typeof z);// Gives number but it is NaN
console.log(z);// This line prints NaN


//"33"==> 33
// "33abd"==> NaN
// null==>0
//undefined==>NaN
//"Aravind"==>NaN
//True==> 1


let sm=true;

let nn=Boolean(sm);
console.log(typeof nn);// converting true to boolean gives true
console.log(nn);//prints true


let mm="";
let zz=Boolean(mm);
console.log(typeof zz);// converting true to boolean gives false
console.log(zz);//prints false


let aa="Aravind";
let yy=Boolean(aa);
console.log(typeof yy);// converting true to boolean gives true
console.log(yy);//prints true

//true==>1 false==>0;
//""==>false(emplty string)
//"Aravind"==>true