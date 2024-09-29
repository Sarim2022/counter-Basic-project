// for dark and white toggle 
let mode = document.getElementById("mode");
let screen = document.querySelector("body");
let box = document.getElementById("boxcontain");
let head = document.getElementById("bad");
let toggle=true;
mode.addEventListener("click",function(){
    if(toggle)
    {
        mode.style.backgroundColor="white";
        mode.style.color="black";
        screen.style.backgroundColor="black";
        box.style.backgroundColor="black";
        head.style.color="white";
        toggle=false;
    }else
    {
        mode.style.backgroundColor="black";
        mode.style.color="white";
        screen.style.backgroundColor="white";
        box.style.backgroundColor= "silver";
        head.style.color="black";
        toggle=true;

    }
})


// increse button functionality

let number = 0;
let but1 = document.getElementById("but1");
let dis = document.getElementById("texts");
but1.addEventListener("click",function(){
    let n = ++number;
    dis.innerHTML = n;
})
but1.addEventListener("mouseover",function(){
    but1.style.backgroundColor="yellow";
    but1.style.color="red";
})
but1.addEventListener("mouseleave",function(){
    but1.style.backgroundColor="purple";
    but1.style.color="white";
})

// decrease button functionality

let but3 = document.getElementById("but3");
but3.addEventListener("click",function(){
    if(dis.innerHTML==0)
    {
        dis.innerHTML = 0;
    }else{
        let g= --number;
        dis.innerHTML = g ;
    }
})
but3.addEventListener("mouseover",function(){
    but3.style.backgroundColor="yellow";
    but3.style.color="red";
})
but3.addEventListener("mouseleave",function(){
    but3.style.backgroundColor="purple";
    but3.style.color="white";
})



//reset functionality


let reset = document.getElementById("but2");
reset.addEventListener("click",function(){
    dis.innerHTML=0;
    number=0;
})
reset.addEventListener("mouseover",function(){
    reset.style.backgroundColor="yellow";
    reset.style.color="red";
})
reset.addEventListener("mouseleave",function(){
    reset.style.backgroundColor="purple";
    reset.style.color="white";
})