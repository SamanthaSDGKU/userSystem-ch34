//JavaScript
//document.getElementById("txtFirstName").style.display="none";

//jQuery(css-selectors)
//let copy = $(".form").clone();
//$(".form").slideUp(5000);

function User(firstname,lastname,age,gender,phone,payment,color){
    this.fname=firstname;
    this.lname=lastname;
    this.age=age;
    this.gender=gender;
    this.phone=phone;
    this.payment=payment;
    this.color=color;
}

function register(){
    let inputFname = $("#txtFirstName").val();
    let inputLname = $("#txtLastName").val();
    let inputAge = $("#txtAge").val();
    let inputGender = $("#txtGender").val();
    let inputPhone = $("#txtPhone").val();
    let inputPayment = $("#selPayment").val();
    let inputColor = $("#selColor").val();

    let newUser=new User(inputFname,inputLname,inputAge,inputGender,inputPhone,inputPayment,inputColor);

    saveUser(newUser); // this fn is on the storeManager
}

function init(){
    //hook events
    $("#btnAdd").click(register);
}

window.onload=init;
