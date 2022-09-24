function validate()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == "CoMech" && password == "akav1234")
    {
        alert("Login Succesfully");
        return false;
    }
    else
    {
        alert("Login Failed...User is not registered in our system!")
    }
}