// In JavaScript, a closure is a feature where an inner function has access to the variables of its outer (enclosing) function, even after the outer function has finished executing.
function counter (){
    let count=0;
    return function (){
        count++;
        console.log(count);
        
    }
}

let aarav=counter();
aarav();  //1
aarav();  //2

let mani=counter();
mani();  //1
mani();  //2