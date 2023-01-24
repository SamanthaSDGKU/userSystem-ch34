function displayUsers(usersArray){
    let tr="";
    //travel the array 
    for(let i=0;i<usersArray.length;i++){
        let user = usersArray[i];
        tr=`
        <tr>
            <td>${user.fname}</td>
            <td>${user.lname}</td>
            <td>${user.email}</td>
        </tr>
        `;
        //create the tmp
        $("#users-table").append(tr);
        //append() the tmp into the HTML table
    }  
}

function init(){
    console.log("Listing users...");
    let users = readUsers();
    displayUsers(users);
}
window.onload=init;