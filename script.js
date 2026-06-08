// ===============================
// TYPEWRITER EFFECT
// ===============================

const typewriter = document.getElementById("typewriter");

if(typewriter){

const text = "Will You Marry Me? ❤️";

let index = 0;

function typeEffect(){

if(index < text.length){

typewriter.innerHTML += text.charAt(index);

index++;

setTimeout(typeEffect,120);

}

}

window.addEventListener("load",typeEffect);

}

// ===============================
// COUNTER ANIMATION
// ===============================

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

const updateCounter = () => {

const target = +counter.getAttribute('data-target');

const current = +counter.innerText;

const increment = Math.ceil(target / 100);

if(current < target){

counter.innerText = current + increment;

setTimeout(updateCounter,20);

}else{

counter.innerText = target;

}

};

updateCounter();

});

// ===============================
// SCROLL REVEAL
// ===============================

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:0.15
}

);

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});

// ===============================
// GALLERY POPUP
// ===============================

const images = document.querySelectorAll(".gallery img");

images.forEach(image=>{

image.addEventListener("click",()=>{

const overlay = document.createElement("div");

overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.background = "rgba(0,0,0,.95)";
overlay.style.display = "flex";
overlay.style.justifyContent = "center";
overlay.style.alignItems = "center";
overlay.style.zIndex = "9999";

const img = document.createElement("img");

img.src = image.src;
img.style.maxWidth = "90%";
img.style.maxHeight = "90%";
img.style.borderRadius = "20px";

overlay.appendChild(img);

overlay.addEventListener("click",()=>{

overlay.remove();

});

document.body.appendChild(overlay);

});

});

// ===============================
// HEART GENERATOR
// ===============================

function createHeart(){

const heart = document.createElement("div");

heart.innerHTML = "❤️";

heart.style.position = "fixed";
heart.style.left = Math.random()*100 + "vw";
heart.style.top = "100vh";
heart.style.fontSize = (20 + Math.random()*20) + "px";
heart.style.opacity = ".8";
heart.style.pointerEvents = "none";
heart.style.zIndex = "999";

document.body.appendChild(heart);

let position = 100;
let drift = (Math.random()*4)-2;

const interval = setInterval(()=>{

position -= 1;

heart.style.top = position + "vh";

heart.style.left =
parseFloat(heart.style.left) + drift + "px";

if(position < -10){

heart.remove();

clearInterval(interval);

}

},30);

}

setInterval(createHeart,1500);

// ===============================
// CONFETTI BUTTON
// ===============================

const surpriseBtn = document.getElementById("surpriseBtn");

if(surpriseBtn){

surpriseBtn.addEventListener("click",()=>{

for(let i=0;i<150;i++){

const confetti = document.createElement("div");

confetti.style.position="fixed";
confetti.style.left=Math.random()*100+"vw";
confetti.style.top="-20px";
confetti.style.width="10px";
confetti.style.height="10px";

const colors = [
"#ff5c8d",
"#ffd700",
"#00e5ff",
"#ffffff",
"#ff9ec4"
];

confetti.style.background =
colors[Math.floor(Math.random()*colors.length)];

confetti.style.zIndex="9999";

document.body.appendChild(confetti);

let top = -20;

const fall = setInterval(()=>{

top += 5;

confetti.style.top = top+"px";

if(top > window.innerHeight){

confetti.remove();

clearInterval(fall);

}

},15);

}

alert("Happy Birthday Dear Husband ❤️");

});

}

// ===============================
// SMOOTH FADE-IN
// ===============================

const style = document.createElement("style");

style.innerHTML = `

.hidden{
opacity:0;
transform:translateY(50px);
transition:1s ease;
}

.show{
opacity:1;
transform:translateY(0);
}

`;

document.head.appendChild(style);
