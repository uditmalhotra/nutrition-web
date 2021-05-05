gsap.registerPlugin(ScrollTrigger);
var t1 = gsap.timeline();

t1.from('.content',{
    y: '-30%',
    opacity:0,
    duration: 2,
    ease: Power4.easeOut
})
t1.from('.stagger-1',{
    y: -50,
    opacity:0,
    stagger: 0.3,
    ease: Power4.easeOut,
    duration: 2
}, "-=1.5")
t1.from('.hero-design',{
    y: 50,
    opacity:0,
    ease: Power4.easeOut,
    duration: 1
}, "-=2")
gsap.from('.square-anim',{
    scale:0.1,
    stagger: 0.2,
    ease: Back.easeOut.config(1.7),
    duration: 1
}, "-=2")
gsap.from(".transition-2",{
    scrollTrigger:{ 
        trigger: '.transition-2',
        start: "top bottom"
    },
    y: 50,
    opacity: 0,
    duration: 0.5,
    stagger: .2
})
gsap.from(".transition-3",{
    scrollTrigger:{ 
        trigger: '.transition-3',
        start: "top bottom"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: .2
})
gsap.from(".transition-4",{
    scrollTrigger:{ 
        trigger: '.transition-4',
        start: "top bottom"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: .2
})
gsap.from(".transition-5",{
  scrollTrigger:{ 
      trigger: '.transition-5',
      start: "top bottom"
  },
  y: 50,
  opacity: 0,
  duration: 0.5,
  stagger: .2
})
gsap.from(".transition-6",{
  scrollTrigger:{ 
      trigger: '.transition-6',
      start: "top bottom"
  },
  y: 50,
  opacity: 0,
  duration: 0.5,
  stagger: .2
})
gsap.from(".transition-7",{
  scrollTrigger:{ 
      trigger: '.transition-7',
      start: "top bottom"
  },
  y: 50,
  opacity: 0,
  duration: 0.9,
  stagger: .3
})



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("blog-data");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
}


var prog = document.getElementsByClassName('prog-container')[0];
var item1 = document.getElementsByClassName('item')[0];
var item2 = document.getElementsByClassName('item')[1];
var item3 = document.getElementsByClassName('item')[2];
var item4 = document.getElementsByClassName('item')[3];
var item5 = document.getElementsByClassName('item')[4];
var item6 = document.getElementsByClassName('item')[5];
var item7 = document.getElementsByClassName('item')[6];
var item8 = document.getElementsByClassName('item')[7];
var detail1 = document.getElementsByClassName('prog-desc')[0];
var detail2 = document.getElementsByClassName('prog-desc')[1];
var detail3 = document.getElementsByClassName('prog-desc')[2];
var detail4 = document.getElementsByClassName('prog-desc')[3];
var detail5 = document.getElementsByClassName('prog-desc')[4];
var detail6 = document.getElementsByClassName('prog-desc')[5];
var detail7 = document.getElementsByClassName('prog-desc')[6];
var detail8 = document.getElementsByClassName('prog-desc')[7];

detail1.onmouseleave=function(){
  detail1.style.display='none';
  prog.style.display='flex';
}

detail2.onmouseleave=function(){
  detail2.style.display='none';
  prog.style.display='flex';
}

detail3.onmouseleave=function(){
  detail3.style.display='none';
  prog.style.display='flex';
}

detail4.onmouseleave=function(){
  detail4.style.display='none';
  prog.style.display='flex';
}

detail5.onmouseleave=function(){
  detail5.style.display='none';
  prog.style.display='flex';
}

detail6.onmouseleave=function(){
  detail6.style.display='none';
  prog.style.display='flex';
}

detail7.onmouseleave=function(){
  detail7.style.display='none';
  prog.style.display='flex';
}

detail8.onmouseleave=function(){
  detail8.style.display='none';
  prog.style.display='flex';
}

item1.onclick=function(){
  detail1.style.display='flex';
  prog.style.display='none';
}

item2.onclick=function(){
  detail2.style.display='flex';
  prog.style.display='none';
}

item3.onclick=function(){
  detail3.style.display='flex';
  prog.style.display='none';
}

item4.onclick=function(){
  detail4.style.display='flex';
  prog.style.display='none';
}

item5.onclick=function(){
  detail5.style.display='flex';
  prog.style.display='none';
}

item6.onclick=function(){
  detail6.style.display='flex';
  prog.style.display='none';
}

item7.onclick=function(){
  detail7.style.display='flex';
  prog.style.display='none';
}

item8.onclick=function(){
  detail8.style.display='flex';
  prog.style.display='none';
}




