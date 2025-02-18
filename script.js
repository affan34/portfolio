console.log("welcome to my portfolio , You are here so enjoy this! , Had to work hard to make it possible beacasue i m at my start of my web development!");
window.addEventListener("load",()=>{
  preloader.style.display="none";
  
})
// for respnsive header changer below 1000px
function myFunction(x) {
  if (x.matches) {
    nav.style.display = "flex";
    headlock.style.display="none";
  } else {
    nav.style.display = "none";
    headlock.style.display="flex";
  }
}

var x = window.matchMedia("(max-width: 1500px)");
// Call listener function at run time
myFunction(x);

//  listener function on state changes
x.addEventListener("change", function () {
  myFunction(x);
});
// Script for header size change
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// for menu in smaller MediaDevices
nav.addEventListener("click", () => {
 
  nav.classList.toggle("fa-bars");
  nav.classList.toggle("fa-xmark");
  head3.classList.toggle("headent");
  nav.classList.toggle("nav2");
  if (headlock.style.display === "none") {
    headlock.style.display = "flex";
  } else {
    headlock.style.display = "none";
  }
  headlock.classList.add("headlock");
});

// for icons change on hover
let a = document.getElementById("b1");
let b = document.getElementById("b2");
let c = document.getElementById("b3");
let d = document.getElementById("b4");
let e = document.getElementById("b5");
let f = document.getElementById("z7");
let h = document.getElementById("z9");
let i = document.getElementById("z10");
let j = document.getElementById("z11");
let k = document.getElementById("z12");
let l = document.getElementById("z13");
let g = document.getElementById("z5");
a.addEventListener("mouseenter", () => {
  a.src = "icons8-linkedin-90 (1).png";
})
a.addEventListener("mouseleave", () => {
  a.src = "icons8-linkedin-90.png";
});
b.addEventListener("mouseenter", () => {
  b.src = "fif.png";
})
b.addEventListener("mouseleave", () => {
  b.src = "dfi.png";
})
c.addEventListener("mouseenter", () => {
  c.src = "twit.png";
})
c.addEventListener("mouseleave", () => {
  c.src = "twi.png";
})
d.addEventListener("mouseenter", () => {
  d.src = "instanw.png";
})
d.addEventListener("mouseleave", () => {
  d.src = "insta.png";
})

e.addEventListener("mouseenter", () => {
  e.src = "fdi.png";
})
e.addEventListener("mouseleave", () => {
  e.src = "f.png";
})
f.addEventListener("mouseenter", () => {
  g.src = "icons8-right-arrow-100 (1).png";

})
f.addEventListener("mouseleave", () => {
  g.src = "icons8-right-arrow-100 (2).png";
})
h.addEventListener("mouseenter", () => {
  z14.src = "icons8-right-arrow-100 (1).png";

})
h.addEventListener("mouseleave", () => {
  z14.src = "icons8-right-arrow-100 (2).png";
})
i.addEventListener("mouseenter", () => {
  z15.src = "icons8-right-arrow-100 (1).png";

})
i.addEventListener("mouseleave", () => {
  z15.src = "icons8-right-arrow-100 (2).png";
})
j.addEventListener("mouseenter", () => {
  z16.src = "icons8-right-arrow-100 (1).png";

})
j.addEventListener("mouseleave", () => {
  z16.src = "icons8-right-arrow-100 (2).png";
})
k.addEventListener("mouseenter", () => {
  z17.src = "icons8-right-arrow-100 (1).png";

})
k.addEventListener("mouseleave", () => {
  z17.src = "icons8-right-arrow-100 (2).png";
})
l.addEventListener("mouseenter", () => {
  z18.src = "icons8-right-arrow-100 (1).png";

})
l.addEventListener("mouseleave", () => {
  z18.src = "icons8-right-arrow-100 (2).png";
})
iz1.addEventListener("mouseenter", () => {
  iz1.src = "icons8-linkedin-logo-100.png";

})
iz1.addEventListener("mouseleave", () => {
  iz1.src = "icons8-linkedin-100.png";
})
iz2.addEventListener("mouseenter", () => {
  iz2.src = "icons8-github-96 (2).png";

})
iz2.addEventListener("mouseleave", () => {
  iz2.src = "icons8-github-96 (1).png";
})
iz3.addEventListener("mouseenter", () => {
  iz3.src = "icons8-instagram-circle-90 (1).png";

})
iz3.addEventListener("mouseleave", () => {
  iz3.src = "icons8-instagram-circle-90.png";
})
iz4.addEventListener("mouseenter", () => {
  iz4.src = "icons8-twitter-circled-100.png";

})
iz4.addEventListener("mouseleave", () => {
  iz4.src = "icons8-twitter-logo-100.png";
})
// right clik disabled
document.addEventListener('contextmenu', event => event.preventDefault());

// for visiblility 
var observer = new IntersectionObserver(function(entries) {

  if (entries[0].isIntersecting === true)
    home2.classList.add("h2line");
  else { home2.classList.remove("h2line"); }
}, { threshold: [0.7] });
var observer2 = new IntersectionObserver(function(entries) {

  if (entries[0].isIntersecting === true)
    about2.classList.add("h2line");
  else { about2.classList.remove("h2line"); }
}, { threshold: [0.7] });
var observer3 = new IntersectionObserver(function(entries) {

  if (entries[0].isIntersecting === true)
    skills2.classList.add("h2line");
  else { skills2.classList.remove("h2line"); }
}, { threshold: [0.7] });
var observer4 = new IntersectionObserver(function(entries) {

  if (entries[0].isIntersecting === true)
    education2.classList.add("h2line");
  else { education2.classList.remove("h2line"); }
}, { threshold: [0.7] });
var observer5 = new IntersectionObserver(function(entries) {

  if (entries[0].isIntersecting === true)
    work2.classList.add("h2line");
  else { work2.classList.remove("h2line"); }
}, { threshold: [0.7] });
var observer6 = new IntersectionObserver(function(entries) {

  if (entries[0].isIntersecting === true)
    contact2.classList.add("h2line");
  else { contact2.classList.remove("h2line"); }
}, { threshold: [0.7] });

observer.observe(document.getElementById("home"));
observer2.observe(document.getElementById("about"));
observer3.observe(document.getElementById("skills"));
observer4.observe(document.getElementById("education"));
observer5.observe(document.getElementById("work"));
observer6.observe(document.getElementById("contact"));

// projects 
lets1.addEventListener("mouseenter", () => {
  fin1a.src = "projecticon/icons8-spotify-500 (1).png";
})
lets1.addEventListener("mouseleave", () => {
  fin1a.src = "projecticon/icons8-spotify-500.png";
});
lets2.addEventListener("mouseenter", () => {
  fin1f.src = "projecticon/icons8-password-100 (1).png";
})
lets2.addEventListener("mouseleave", () => {
  fin1f.src = "projecticon/icons8-password-100.png";
});
lets3.addEventListener("mouseenter", () => {
  fin1i.src = "projecticon/icons8-meal-64 (1).png";
})
lets3.addEventListener("mouseleave", () => {
  fin1i.src = "projecticon/icons8-meal-64.png";
});
lets4.addEventListener("mouseenter", () => {
  fin1j.src = "projecticon/icons8-shop-96 (1).png";
})
lets4.addEventListener("mouseleave", () => {
  fin1j.src = "projecticon/icons8-shop-96.png";
});
lets5.addEventListener("mouseenter", () => {
  fin1k.src = "projecticon/icons8-circle-100 (1).png";
})
lets5.addEventListener("mouseleave", () => {
  fin1k.src = "projecticon/icons8-circle-100.png";
});
lets6.addEventListener("mouseenter", () => {
  fin1l.src = "projecticon/icons8-male-user-90 (1).png";
})
lets6.addEventListener("mouseleave", () => {
  fin1l.src = "projecticon/icons8-male-user-90.png";
});
// scroll on projects
// Dark & Light toggle

