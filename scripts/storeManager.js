function saveUser(user){
    let oldUsers = readUsers();
    console.log(user); // this is obj
    oldUsers.push(user);
    let val = JSON.stringify(oldUsers);// parse the obj into string
    console.log(val);//this is string
    localStorage.setItem("users",val);
}

function readUsers(){
    let users = localStorage.getItem("users");//getting the users from LS
    console.log(users);

    if(!users){//NOT users?
        //here the LS is empty
        return []; // creating the empty array
    }else{
        //if you get here the LS has users
        let listUsers = JSON.parse(users);//parse the users back into array
        console.log(listUsers);
        return listUsers;
    }
}