const names = ['justin','Sarah', 'Christopher'];
console.log("---while---");
let index = 0 ;
while(index < names.length){
    const name = names[index];
    console.log(name);
    index++;
}

console.log("---for---");
for(let index = 0; index < names.length; index++){
    const name = name[index];
    console.log(name);
}

console.log("----for or---");
for (let name of names){
    console.log(name);
}