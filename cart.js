//  window.location.reload()
var suce= JSON.parse(localStorage.getItem("success")) 

console.log(suce)
 if(suce.signin==true)
 {
    document.querySelector("#namelogin").innerText= "Hi,"+" "+suce.username
 }

 datfrmman= JSON.parse(localStorage.getItem("cartdata"))||[]  

 var sum=0

 displaydata(datfrmman)

 function displaydata(datfrmman){

datfrmman.forEach(function(ele,ind){
  
  

    var box1=document.createElement("div")
    
     var prodimg= document.createElement("img")
     prodimg.setAttribute("src",ele.imgageurl)

     var prodname=document.createElement("p")
     prodname.innerText=ele.name

     var sign=document.createElement("h5")
     sign.innerText="$"

     var prodprice=document.createElement("p")
     prodprice.innerText=ele.price

     sum=sum+ Number(ele.price)

     var delbtn=document.createElement("button")
     delbtn.innerText="DELETE"
     delbtn.addEventListener("click",function(){
      delfun(ele,ind)
     })
    

     box1.append(prodimg,prodname,sign,prodprice,delbtn)
     document.querySelector("#proddisp").append(box1)
})

 }

 function delfun(ele,ind){
   console.log("Hi")
   datfrmman.splice(ind,1)
   displaydata(datfrmman)
   localStorage.setItem("cartdata",JSON.stringify(datfrmman))
   window.location.reload()

  
  
 }


 document.querySelector("#sub").innerText= "$"+""+sum+".00"
 document.querySelector("#prodtotal").innerText=datfrmman.length

document.querySelector("#prmbtn").addEventListener("click",promofun)

function promofun(){
  var prmdisc=(sum*90)/100
  console.log(prmdisc)

  document.querySelector("#sub").innerText= "$"+""+Math.floor(prmdisc)+".00"
  
}
 