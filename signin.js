 var datafrmsignup=  JSON.parse(localStorage.getItem("userdata"))

document.querySelector("#signinbtn").addEventListener("click",signinfun)


function signinfun(){
    // console.log("hi");
    // alert("Hi")
   

    var  storeemail=document.querySelector("#signemail").value
    var storepassword=document.querySelector("#signpassword").value
    console.log(storeemail,storepassword)

    var flag = false;
    for(var i = 0;i<datafrmsignup.length;i++){
      
        if(datafrmsignup[i].userpassword==storepassword && datafrmsignup[i].useremail == storeemail){
            flag = true
            var obj = {
                signin : true,
                username:datafrmsignup[i].username
            }
            localStorage.setItem("success",JSON.stringify(obj))
            alert("sign in Successful ")
            window.location.href="index.html"
            break;
        }
        
    }
    if(flag==false){
        alert("sign in fail")
    }


}
    

   
 