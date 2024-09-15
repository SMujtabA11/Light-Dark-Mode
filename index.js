var btn = document.getElementById("btn");
var bd = document.getElementById("bd");
var isDark = false;
btn.addEventListener("click",function(){
    if(isDark === false){
        bd.style.backgroundColor="black";
        btn.style.backgroundColor="white";
        btn.innerText="Light Mode"
        btn.style.color="black";
        isDark= true;
    }
    else{
        bd.style.backgroundColor="white";
        btn.style.backgroundColor="black";
        btn.innerText="Dark Mode"
        btn.style.color="white";
        isDark=false;
    }

})
