 var suce= JSON.parse(localStorage.getItem("success")) 

console.log(suce)
 if(suce.signin==true)
 {
    document.querySelector("#namelogin").innerText= "Hi,"+" "+suce.username
 }