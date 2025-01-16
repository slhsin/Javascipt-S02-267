const { start } = require("repl");


function promiseTimeout(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms);
    });
}

async function longRunningOperation() {
    //logic
    return 42;
}

async function run() {
    //logic
    console.log("start");
    await promiseTimeout(2000);

    const reponse = await longRunningOperation();
    console.log(reponse);

    console.log("stop");
    
}

run();
