// ===== Loading Animation =====

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

// ===== Smooth Scroll =====

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",e=>{

e.preventDefault();

const target=document.querySelector(link.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// ===== Navbar Shadow =====

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.boxShadow="0 8px 30px rgba(0,0,0,.35)";

header.style.background="rgba(12,18,28,.92)";

}else{

header.style.boxShadow="none";

header.style.background="rgba(15,20,30,.75)";

}

});

// ===== Counter Animation =====

const counters=document.querySelectorAll(".card h2");

let started=false;

window.addEventListener("scroll",()=>{

const stats=document.querySelector(".stats");

if(!stats) return;

const top=stats.offsetTop-300;

if(window.scrollY>top && !started){

started=true;

animateCounter(counters[0],10000,"+");

animateCounter(counters[1],3.2,"⭐");

}

});

function animateCounter(element,target,symbol){

let value=0;

let step=target/80;

const timer=setInterval(()=>{

value+=step;

if(value>=target){

clearInterval(timer);

if(symbol==="+")

element.innerHTML="10K+";

else

element.innerHTML="3.2 ⭐";

}else{

if(symbol==="+")

element.innerHTML=Math.floor(value);

else

element.innerHTML=value.toFixed(1);

}

},20);

}

// ===== Scroll Reveal =====

const reveal=document.querySelectorAll(".feature,.project,.card,.screens img,.contact-grid a");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

reveal.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(60px)";

item.style.transition=".7s";

observer.observe(item);

});

// ===== Back To Top =====

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="top-btn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";

topBtn.style.right="20px";

topBtn.style.bottom="20px";

topBtn.style.width="55px";

topBtn.style.height="55px";

topBtn.style.borderRadius="50%";

topBtn.style.border="none";

topBtn.style.cursor="pointer";

topBtn.style.fontSize="22px";

topBtn.style.background="#ff4d6d";

topBtn.style.color="#fff";

topBtn.style.display="none";

topBtn.style.boxShadow="0 10px 30px rgba(255,77,109,.45)";

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ===== Ripple Effect =====

document.querySelectorAll(".buttons a,.donate a").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

const size=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=size+"px";

circle.style.height=size+"px";

circle.style.position="absolute";

circle.style.borderRadius="50%";

circle.style.background="rgba(255,255,255,.35)";

circle.style.left=e.offsetX-size/2+"px";

circle.style.top=e.offsetY-size/2+"px";

circle.style.animation="ripple .6s linear";

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

// ===== Console =====

console.log("InstaDownloader Portfolio Loaded Successfully 🚀");
