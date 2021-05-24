function validate() {
     var mail1=document.getElementById("mail").value;
     var psw1=document.getElementById("psw").value;
     if(mail1=="user"&& psw1=="123456")
     {
         alert("login succesfull");
         return false;
     } 
     else {
         alert("Login failed");
     }

    }