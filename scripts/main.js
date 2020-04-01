window.onload = function(){
    textflash();
};
var flash = document.getElementById("flash");

function brflash(f){
    return function(){
        if(f.style.color === "black"){
            f.style.color = "red";
        }
        else{
            f.style.color = "black";
        }
    }
}(f)

function textflash(){
    setInterval(brflash(flash),500);
    //console.log(flash.textContent);
}