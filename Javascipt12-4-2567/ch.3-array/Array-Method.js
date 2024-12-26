const arrayofnumbers = [1,2,3,4];

const sum = arrayofnumbers.reduce((accumulator, currentValue) =>{
    return accumulator + currentValue;
});

console.log(sum);