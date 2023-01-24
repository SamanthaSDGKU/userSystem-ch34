//JavaScript
//document.getElementById("txtFirstName").style.display="none";

//jQuery(css-selectors)
//let copy = $(".form").clone();
//$(".form").slideUp(5000);

function User(firstname,lastname,age,gender,phone,payment,color,email,password){
    this.fname=firstname;
    this.lname=lastname;
    this.age=age;
    this.gender=gender;
    this.phone=phone;
    this.payment=payment;
    this.color=color;
    this.email=email;
    this.password=password;
}
function validation(user){
    let valid = true;
    if(user.email==""){
        valid = false;
        $("#txtEmail").addClass("alert-error");
    }
    return valid;  
}
let inputFname = $("#txtFirstName");
let inputLname = $("#txtLastName");
let inputAge = $("#txtAge");
let inputGender = $("#txtGender");
let inputPhone = $("#txtPhone");
let inputPayment = $("#selPayment");
let inputColor = $("#selColor");
let inputEmail = $("#txtEmail");
let inputPassword = $("#txtPassword");

function register(){
    let newUser=new User(inputFname.val(),inputLname.val(),inputAge.val(),inputGender.val(),inputPhone.val(),inputPayment.val(),inputColor.val(),inputEmail.val(),inputPassword.val());
    if(validation(newUser)==true){
        saveUser(newUser); // this fn is on the storeManager
        $("input").val("");//this line clear all the inputs
    }  
}

function init(){
    //hook events
    $("#btnAdd").click(register);
}

window.onload=init;
