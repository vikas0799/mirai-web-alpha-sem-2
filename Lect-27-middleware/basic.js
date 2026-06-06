let data={
    "name":"dipesh singh",
    age:40
}

console.log(typeof(data));
 data=JSON.stringify(data);
console.log(typeof(data));


data=JSON.parse(data);
console.log(typeof(data));
