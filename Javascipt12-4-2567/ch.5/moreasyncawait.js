const { resolve } = require("path");

function who(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("🗿");
        },200);
    });
}

function what(){
    return new Promise((resolve) => {
    setTimeout(()=>{
        resolve("nigga");
    },300);    
    });
}

function where(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("in the shadows");
        },1000);
    });
}

async function msg() {
    const a = await who();
    const b = await what();
    const c = await where();

    console.log(`${a} ${b} ${c}`);
}

console.log('we are looking for:')
msg();
console.log('Hello')