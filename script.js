var increase=document.getElementById("increase");
var reset=document.getElementById("reset");
var decrease=document.getElementById("decrease");

var c=0;
function increasing(){
    c++
    document.getElementById("demo").innerHTML = c;
    if (c<0) {
        document.getElementById("demo").style.color = "red";
            
        }
    else if (c>0) {
        document.getElementById("demo").style.color = "green";
        
    } else {
        document.getElementById("demo").style.color = "black";
        
    }
   
   
}
function decreasing(){
    c--
    document.getElementById("demo").innerText=c
    if (c<0) {
        document.getElementById("demo").style.color = "red";
            
        }
    else if (c>0) {
        document.getElementById("demo").style.color = "green";
        
    } else {
        document.getElementById("demo").style.color = "black";
        
    }
   
}
function resiting () {
document.getElementById("demo").innerText=0;
c=0;
document.getElementById("demo").style.color = "black";
    

}




increase.addEventListener("click",increasing);
decrease.addEventListener("click",decreasing);
reset.addEventListener("click",resiting);