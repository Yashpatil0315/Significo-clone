
function homeAnimation(){
gsap.set(".slidesm" ,{scale :5})

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "top top",
    end: "bottom bottom",
    scrub: 2,
  }
});

tl.to(".vdodiv", {
  "--clip": "0%",
  ease: "power2.out",
}, "<")
.to(".slidesm", {
  scale: 1,
  ease: "power2.out",
}, "<")
.to(".lft", {
  xPercent: -5,
  stager:.3,
  ease: "power4",
}, "b") 
.to(".rgt", {
  xPercent: 5,
   stager:.3,
  ease: "power4",
}, "b") 
}

function slidesAniation(){
gsap.to(".slide",{
    scrollTrigger: {
    trigger: ".real",
    start: "top top",
    end: "bottom bottom",
    scrub: 3,
  },
  xPercent: -310,
  ease: "power4"
})
}

function teamAnimation(){
  document.querySelectorAll(".listitem")
.forEach(function(el) {
  el.addEventListener("mousemove", function(dets) {
    gsap.to(this.querySelector(".picture"), {
      opacity: 1,
      x:gsap.utils.mapRange( 0, window.innerWidth,-200 , 200 , dets.clientX),
      ease: Power2,
      duration: 0.5
    });

    gsap.to(this.querySelector(".bluelayer"),{
      height:"100%",
      ease: Power2
    });
  });

  el.addEventListener("mouseleave", function(dets) {
    gsap.to(this.querySelector(".picture"), {
      opacity: 0,
      ease: Power2,
      duration: 0.5
    });

     gsap.to(this.querySelector(".bluelayer"),{
      height:"0%",
      ease: Power2
    });
  });

  

});
}

function last(){
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
  })();
}

function capsule() {
  gsap.to(".capsule:nth-child(2)", {
    scrollTrigger: {
      trigger: ".capsules",
      start: "top 50%",
      end: "bottom bottom",
      scrub: 2
    },
    y: 0,
    ease: "power2"
  });
}


document.querySelectorAll(".section")
.forEach(function(e){
  ScrollTrigger.create({
    trigger: e,
    start: "top 30%",
    end: "bottom 50%",
    onEnter: function() {
      document.body.setAttribute("theme", e.dataset.color);
    },
    onEnterBack: function() { // fixed typo here
      document.body.setAttribute("theme", e.dataset.color);
    }
  });
});


homeAnimation();
slidesAniation();
teamAnimation()
capsule()

