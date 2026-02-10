function bank(){
    let balance=0;

    let deposite=(amount)=>{
       balance += amount;
        
    }
    let withdrawl=(amount)=>{
       balance -= amount;
        
    }
    let mybalance=()=>{
        console.log(balance);
        
    }
    return {deposite,withdrawl,mybalance}
}

let tejas=bank();
tejas.deposite(2000);
tejas.withdrawl(1000);
tejas.mybalance();


let depesh=bank();
depesh.deposite(6000);
depesh.withdrawl(3000);
depesh.mybalance();
