

document.getElementById("img").src = "of.png";
     document.getElementById("of").style.backgroundColor="yellow";
     document.getElementById("of").style.Color="white";
function btnOn(){
     document.getElementById("img").src ="on.png";
     document.getElementById("text").innerHTML="On Timing";
     document.getElementById("on").style.backgroundColor="yellow";
     document.getElementById("on").style.Color="white";
     document.getElementById("of").style.backgroundColor="white";
     document.getElementById("of").style.Color="black";
     document.getElementById('text1').innerHTML = (new Date().toLocaleString() )
}


function btnOf(){
     document.getElementById("img").src ="of.png";
     document.getElementById("text").innerHTML="Off Timing";
     document.getElementById("on").style.backgroundColor="white";
     document.getElementById("on").style.Color="black";
     document.getElementById("of").style.backgroundColor="yellow";
     document.getElementById("of").style.Color="white";
     document.getElementById('text1').innerHTML = (new Date().toLocaleString())
}




