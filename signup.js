document.querySelector("#accbtn").addEventListener("click",signfun)

userarr= JSON.parse(localStorage.getItem("userdata")) ||[]
var obj = {
   signin:false,
   
}
localStorage.setItem("success",JSON.stringify(obj))
function signfun(){

 var signobj={
    username: document.querySelector("#name").value,
    useremail:document.querySelector("#email").value,
    userpassword:document.querySelector("#password").value,
    userrepass: document.querySelector("#repass").value
 };
 
 
 if(signobj.userpassword != signobj.userrepass){
    alert ("Incorrect Password")
 }
 
 else{
    alert("Sign Up Successful")
    window.location.href="signin.html"
 }
 userarr.push(signobj)

 localStorage.setItem("userdata",JSON.stringify(userarr))
 

}
 