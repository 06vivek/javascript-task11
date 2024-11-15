let employerage = 30;

try {
    let result = employerage/null;
   
    if(!isFinite(result)){
        throw new error("not valid number to divide")
    }
} catch (error){
    console.log(error)
    console.log(employerage/2)
}