function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="shreyash" && password=="12")
    {
       open("main.html");
    }
    else
    {
        alert("Invalid username or Password");
    }

}
function crt()
{
     var m= document.getElementById("cmob").value;
     var pi= document.getElementById("cpass").value;
     if(isNaN(pi) || pi.length<=6)
     {
              alert("Please create a strong password min length 6");
      }
      if(isNaN(m) || m.length!=10)
      {
               alert("Please enter a valid mobile number");
    }
}
function subus()
{
     var q= document.getElementById("usnum").value;
      if(isNaN(q) || q.length!=10)
      {
               alert("Please enter a valid mobile number");
    }
}