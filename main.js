// // EFEITO SCROLLREVEAL
window.sr = ScrollReveal({ reset: true});

sr.reveal('.haga1', { duration: 2000});

sr.reveal('.haga2', {
     rotate: { x:0, y:80, z:0},
     duration: 2000});

 sr.reveal('.haga3', {
     rotate: { x:0, y:80, z:0},
     duration: 2000});
// // EFEITO SCROLLREVEAL

// CURSOR
document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
    t.style.left = n.clientX + "px", 
    t.style.top = n.clientY + "px", 
    e.style.left = n.clientX + "px", 
    e.style.top = n.clientY + "px", 
    i.style.left = n.clientX + "px", 
    i.style.top = n.clientY + "px"
});
var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2"),
    i = document.getElementById("cursor3");
function n(t) {
    e.classList.add("hover"), i.classList.add("hover")
}
function s(t) {
    e.classList.remove("hover"), i.classList.remove("hover")
}
s();
for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
    o(r[a])
}
function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
}
// CURSOR



VanillaTilt.init(document.querySelectorAll(".box"), {
    max: 25,
    speed: 400,
    easing:"cubic-bezier(.03,.98,.52,.99)",
    transition:true
});