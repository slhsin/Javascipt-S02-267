function createQuote(quote, callback){
    let myquote = "Like I always say, "+ quote;
    callback(myquote);

}

function logQuote(quote){
    console.log(quote + 'Yes...');
}

createQuote(" you will getting better!", logQuote);