function fonksio(){
  var hedefURL = "../htmls/home.html";
var username1 = document.getElementById("klncadi").value;
var password1 = document.getElementById("password").value;

console.log(username1);
console.log(password1);

// ALTTAKİNİ KOPYALAYARAK HESAP EKLE
if(username1=="taharslan" && password1=="00228t"){
  window.location.href = hedefURL;
}  
else if(username1=="admin" && password1=="admin"){
  window.location.href = hedefURL;
} 
else if(username1=="ayı" && password1=="şalterci"){
  window.location.href = hedefURL;
}
    

// ÜSTTEKİNİ KOPYALAYARAK HESAP EKLE

else if(username1=="Taharslan" && password1=="00228t"){
  window.location.href = hedefURL;
}
else if(username1=="Taharslan" && password1=="0022800228t"){
  window.location.href = hedefURL;
}
else if(username1=="taharslan" && password1=="0022800228t"){
  window.location.href = hedefURL;
}












 else{
    username1=false;
    password1=false;
}
if(username1==false && password1==false){
    document.querySelector(".alert").classList.remove("hidden");
    }};



  function fonksio1(){
    document.querySelector(".alert").classList.add("hidden");
  }

  document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      fonksio();
    }
  });