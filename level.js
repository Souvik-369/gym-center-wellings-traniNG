var timeout;
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function firstPageAnim(){
    var tl=gsap.timeline();

    tl.from(".bounding",{
        y:"-10",
        opacity:0,
        duration:1.2,
        ease: 'expo.inOut',
        

    })
    .to(".boundinglm",{
        y:0,
        duration:1.6,
        stagger:0.2,
        ease: 'expo.inOut',

    });
}
function circleFlat(){
    var xscale=1;
    var yscale=1;
    var xprev=0;
    var yprev=0;
    window.addEventListener("mousemove",function(dets){

var xdiff=dets.clientX-xprev;
xprev=dets.clientX;
var ydiff=dets.clientY-yprev;
yprev=dets.clientX;
xscale = gsap.utils.clamp(0.5, 1.2,xdiff);
yscale = gsap.utils.clamp(0.5, 1.2,ydiff);
xprev=dets.clientx;
yprev=dets.clientY;
circleMouseFollower(xscale,yscale);

    });
}
circleFlat();
function circleMouseFollower(xscale,yscale){
window.addEventListener("mousemove", function(dets){
    timeout = setTimeout(function () {
document.querySelector("#circle1").style. transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(1,1) `;
},100);
});
}
 
circleMouseFollower();
firstPageAnim();

document.querySelectorAll(".name")
.forEach (function(name){
    var differ=0;
    var rotate=0;
name.addEventListener("mousemove",function(dets){
var diff=(dets.clientY-name.getBoundingClientRect().top);

differ=dets.clientX-rotate;
rotate=dets.clientX;

gsap.from(name.querySelector("img"),{
    opacity:1,
    ease:'power1',
    top:diff, 
    left:dets.clientX,
    rotate:gsap.utils.clamp(-20,20, differ*0.6)
});
gsap.to(name.querySelector("img"),{
    opacity:-1,
    ease:'power1',
    
});

});

});
function toggleMenu() {
    var navList = document.getElementById("navList");
    var menuToggle = document.querySelector(".menu-toggle");

    if (navList.style.display === "block") {
        navList.style.display = "none";
        menuToggle.style.display = "block";
    } else {
        navList.style.display = "block";
        menuToggle.style.display = "none";
    }
}



const clockInterval = setInterval(updateClock, 1000);

function updateClock() {
    // Get the current date and time
    const currentTime = new Date();

    // Get hours, minutes, and seconds
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    // Format the time to ensure two digits
    const formattedHours = formatTime(hours);
    const formattedMinutes = formatTime(minutes);
    const formattedSeconds = formatTime(seconds);

    // Display the clock in the 'clock' element
    document.getElementById('clock').innerHTML = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
