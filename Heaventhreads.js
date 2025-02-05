$(document).ready(function() {
    $(".loginform").submit(function(event){
        
        
       event.preventDefault(); 
       let name=$("#username").val();
       let email=$("#email").val();
       let password=$("#password").val();
       if(name==""){
        document.forms[0].name.style.borderColor="red";
        document.forms[0].getElementsByTagName("label")[0].style.color="red";
        result.innerText="Enter your Name";
        result.style.color="red";
       }
      else if(email==""){
        document.forms[0].email.style.borderColor="red";
        document.forms[0].getElementsByTagName("label")[1].style.color="red";
        result.innerText="Enter an Email";
        result.style.color="red";
         
      }
else if(password==""){
    document.forms[0].password.style.borderColor="red";
    document.forms[0].getElementsByTagName("label")[2].style.color="red";
 let result=document.getElementById("result");
  result.innerText="Enter a password";
    result.style.color="red";
        
   
    }
    else  {
        window.location.href="index.html";
        console.log("hi");
    }})
})