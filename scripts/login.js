function login(){
    // get the values from the inputs
    let email = $("#txtEmail").val();
    let password = $("#txtPassword").val();
    let valid = false;
    let users = readUsers();// this is in StoreManager.js
    console.log(users);
    console.log(email,password);
    // if statement to compare the input values vs localstorage values
    for(let i=0;i<users.length;i++){
        let user=users[i];
        if(email===user.email && password===user.password){
            window.location="users.html";
            valid=true;
        }
        
    }  
    
    if(!valid){
        alert("Invalid credentials");
    }
}

function init(){
    // hook event
    $("#btnLogin").click(login);
}
window.onload=init;