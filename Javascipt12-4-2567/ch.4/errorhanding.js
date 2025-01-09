function crititcalCode(){
    throw "throwing an exception";
}

function logError(theException){
    console.log(theException);

}

console.log("\n***********Try..Catch************\n")
try{
    crititcalCode();

} catch(ex){
    console.log("Got an error");
    logError(ex);
}

console.log("\n*************Throwing in Try..Catch***********\n")

try{
    throw "An exception that is thrown every time";
} catch(ex){
    console.log("got an error");
    logError(ex);

}

console.log("\n***********Try..Catch..finally**********\n");

try{
    crititcalCode();
}catch(ex){
    console.log("get an error");
    logError(ex);
}finally{
    console.log("code tht always will run");
}
function hello(){
    console.log("\n***********Throwing Exceptions*************\n");
    
}