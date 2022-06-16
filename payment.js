var suce= JSON.parse(localStorage.getItem("success")) 

console.log(suce)
 if(suce.signin==true)
 {
    document.querySelector("#namelogin").innerText= "Hi,"+" "+suce.username
 }

 document.querySelector("button").addEventListener("click",placefun)

 function placefun(){
    
   
  
    alert("Order Placed, Thanks For Using Shopbop")

 }