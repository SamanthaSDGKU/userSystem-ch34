function saveUser(user){
    console.log(user); // this is obj
    let val = JSON.stringify(user);// parse the obj into string
    console.log(val);//this is string
    localStorage.setItem("users",val);
}