var suce= JSON.parse(localStorage.getItem("success")) 

console.log(suce)
 if(suce.signin==true)
 {
    document.querySelector("#namelogin").innerText= "Hi,"+" "+suce.username
 }

 var manarr=[
 {
    imgageurl: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/oniaa/oniaa304441b19a/oniaa304441b19a_1651777309665_2-0._UY0_QL90_.jpg",
    name:"Linen Ss Pocket Tee",
    price:"55.00"
 },

 {
    imgageurl: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/oniaa/oniaa304061cc6f/oniaa304061cc6f_1651695673264_2-0._SH20_QL90_UY365_.jpg",
    name:"Liberty Charles 5 Shorts",
    price:"99.00"
 },

 {
    imgageurl: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/oniaa/oniaa303921cc6f/oniaa303921cc6f_1651611132538_2-0._SH20_QL90_UY365_.jpg",
    name:"Liberty Linen Shirt",
    price:"185.00"
 },

 {
    imgageurl: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/oniaa/oniaa303991cc73/oniaa303991cc73_1652127339486_2-0._SH20_QL90_UY365_.jpg",
    name:"Water Resistant Linen Camp Shirt",
    price:"125.00"
 },

 {
    imgageurl: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/oniaa/oniaa3046567924/oniaa3046567924_1654614928948_2-0._UY0_QL90_.jpg",
    name:"Charles 5 Swim Shorts",
    price:"145.00"
 },

 {
    imgageurl: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/oniaa/oniaa3046135869/oniaa3046135869_1654614925625_2-0._UY0_QL90_.jpg",
    name:"Charles 5 Swim Shorts",
    price:"95.00"
 },

 {
    imgageurl: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/oniaa/oniaa3049013987/oniaa3049013987_1653405842704_2-0._UY0_QL90_.jpg",
    name:"Towel Terry Polo",
    price:"95.00"
 },

 {
    imgageurl: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/oniaa/oniaa3049113987/oniaa3049113987_1653404973530_2-0._SH20_QL90_UY365_.jpg",
    name:"Towel Terry Shorts",
    price:"105.00"
 },

 {
    imgageurl: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/oniaa/oniaa303891cc6c/oniaa303891cc6c_1652902865541_2-0._SH20_QL90_UY365_.jpg",
    name:"Towel Terry Pullover",
    price:"120.00"
 },

 {
    imgageurl: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/oniaa/oniaa304021cc6c/oniaa304021cc6c_1652884631274_2-0._SH20_QL90_UY365_.jpg",
    name:"Towel Terry Shorts",
    price:"95.00"
 },

 {
    imgageurl: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/oniaa/oniaa3039123349/oniaa3039123349_1651687588396_2-0._UY0_QL90_.jpg",
    name:"Linen Polo",
    price:"60.00"
 },

 {
    imgageurl: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/oniaa/oniaa3040723349/oniaa3040723349_1651687511738_2-0._SH20_QL90_UY365_.jpg",
    name:"Charles 7 Trunks",
    price:"95.00"
 },

 {
    imgageurl: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/oniaa/oniaa3038829619/oniaa3038829619_1651598334864_2-0._SH20_QL90_UY365_.jpg",
    name:"Home Popover Hoodie",
    price:"110.00"
 },

 {
    imgageurl: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/oniaa/oniaa3040076438/oniaa3040076438_1651774298501_2-0._UY0_QL90_.jpg",
    name:"Traveler Upf Sun Tee",
    price:"50.00"
 },

 {
    imgageurl: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/oniaa/oniaa3044223349/oniaa3044223349_1652127662631_2-0._UY0_QL90_.jpg",
    name:"6 Traveler Shorts",
    price:"130.00"
 },

 {
    imgageurl: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/oniaa/oniaa3040329543/oniaa3040329543_1651682662544_2-0._SH20_QL90_UY365_.jpg",
    name:"Nylon Crinkle Multi Functional Shor",
    price:"110.00"
 },

 {
    imgageurl: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/oniaa/oniaa3040423921/oniaa3040423921_1651612711758_2-0._SH20_QL90_UY365_.jpg",
    name:"Calder 6E Shorts",
    price:"75.00"
 },

 {
    imgageurl: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/oniaa/oniaa304221cc6c/oniaa304221cc6c_1651689167696_2-0._SH20_QL90_UY365_.jpg",
    name:"Crinkle Nylon Camp Shirt",
    price:"60.00"
 },

 {
    imgageurl: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/oniaa/oniaa304081cc6c/oniaa304081cc6c_1651682869944_2-0._UY0_QL90_.jpg",
    name:"Charles 7 Swim Trunks",
    price:"45.00"
 },

 {
    imgageurl: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/oniaa/oniaa3038113987/oniaa3038113987_1643315581226_2-0._SH20_QL90_UY365_.jpg",
    name:"Stretch Linen Pull On Shorts",
    price:"99.00"
 },


]


   
 

   
 var addedarr=JSON.parse(localStorage.getItem("cartdata")) || []

displaydata(manarr)

 function displaydata(manarr){
   

   manarr.forEach(function(ele){

      var avatar= document.createElement("img")
      avatar.setAttribute("src",ele.imgageurl)
   
      var pname=document.createElement("p")
      pname.innerText=ele.name

      var sign=document.createElement("h5")
      sign.innerText="$"
   
      var pprice=document.createElement("p")
       pprice.innerText=ele.price
      
      var bag=document.createElement("button") 
      bag.innerText="ADD TO BAG"

      bag.addEventListener("click",function(){

         addfun(ele)
      })
   
       var box=document.createElement("div")
   
       box.append(avatar,pname,sign,pprice,bag)
       document.querySelector("#foryou").append(box)
   
     
   
   
   })
 }

 function addfun(ele){
     addedarr.push(ele)

       localStorage.setItem("cartdata",JSON.stringify(addedarr))
     
 }
 document.querySelector("#bag").addEventListener("click",function(){
   window.location.reload()
 })


 