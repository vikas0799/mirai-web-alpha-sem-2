// add();  //0
add(1)(); //1
// add(1)(2)(); //3
// add(1)(2)(3)();  //6
// add(1)(2)(3)(4)(); //10


let add=(num)=> {
    if (!num)
        return 0;
    else {
        return function helper(v){
            if(!v)
                return num;               
            num +=v;
            return helper;
        }
    }
}

// ad(1)();
add(1)(2)();
