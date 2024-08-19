const user={
    name:"Aravind",
    age:24,
    WelcomeMsg:function(){
        console.log(`${this.name},Welcome to the Website`);
        console.log(this);
        
    }
}
//This (this)Keyword refers to current context scope

// user.WelcomeMsg();
// user.name="Sam";

// user.WelcomeMsg();

// console.log(this);

function one(){
    let usern="Aravind";
    console.log(this);//This keyword inside func gives procsess values
    
    console.log(this.usern);//This keyword works in objects if we try to use in functions the values are undefined 
}

//one();

//+++++++++++++++++++ARROY FUNCTION++++++++++++++++++++++


const chai=()=>{
    console.log("Aravind1");
}
chai()

//Implecet return function//

const chai2=(num1,num2)=> num1+num2;
const chai3=(num1,num2)=> (num1+num2);//If {}used so return should be used and ()no need to use return statement

console.log(chai3(3,4));