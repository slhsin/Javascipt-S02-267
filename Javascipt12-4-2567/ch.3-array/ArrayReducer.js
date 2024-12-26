const array = [15,16,17,18,19];

function reducer(accumulator,currentValue,index){
    const returns = accumulator + currentValue;
    console.log(
        'accmulator: ${accmulator},currentValue: ${currentValue},index${index},returns: ${returns}',
    );
    return returns;
}

array.reduce(reducer);