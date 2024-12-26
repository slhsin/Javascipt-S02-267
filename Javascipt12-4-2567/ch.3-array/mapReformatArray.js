const kvArray = [
    {key: 1, value: 10},
    {key: 2, value: 10},
    {key: 3, value: 10},
];

const reformattedArray = kvArray.map(({key,value})=>({[key]: value}));

console.log(reformattedArray);
console.log(kvArray);