var objPeople = [
    {
        username: "admin",
        password: "12345"
    }
];
function adminValidate(call_Test){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    for(var i=0;i<objPeople.length; i++){
            
            if(username.value=="" || password=="")
            {
                alert("All fields are required!!");
                return false;
            }
            else if(username==objPeople[i].username && password==objPeople[i].password)
            {
                alert(username + " is logged in!!!");
                return;
            }
            else
            {
                alert("Incorrect username or password");
                return false;
            }
    }
    call_Test();
}
function redirect(){
    window.location.replace("todo.html");
 }