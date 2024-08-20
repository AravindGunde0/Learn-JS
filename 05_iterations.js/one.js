
for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
    
    
}

// for (let i = 1; i < 10; i++) {
//     console.log(`Outer Loop::::::::::::::::::::::::::${i}`)
//     for (let j = 1; j < 10; j++) {
//         console.log(`Inner Loop:${j}`)
        
//     }
// }
for (let i = 1; i < 10; i++) {
    //console.log(`Outer Loop::::::::::::::::::::::::::${i}`)
    for (let j = 1; j < 10; j++) {
        //console.log(`${i} * ${j} = ${i*j}`)
    }
}


//break and continue

// for (let index = 0; index < 20; index++) {
//     if(index==5){
//         console.log("Detected value 5");
        
//         break;
//     }
//     console.log(`Value of i is ${index}`);
    
    
for (let index = 0; index < 20; index++) {
    if(index==5){
        console.log("Detected value 5");
        
        continue;
    }
    console.log(`Value of i is ${index}`);
    
    
}