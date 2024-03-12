const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
// !---------------------------------------------------------------


function menuShow() {
    let menuMobile = document.querySelector('.mobile')
    document.getElementById('menuBtdC').style.display = "block";
    document.getElementById('menuBtdS').style.display = "none";
    menuMobile.style.display = "flex";
}

function menuHide() {
    let menuMobile = document.querySelector('.mobile')
    document.getElementById('menuBtdS').style.display = "block";
    document.getElementById('menuBtdC').style.display = "none";
    menuMobile.style.display = "none";
}






gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".line").forEach(line => {
    gsap.fromTo(line, {
        width: 0,
    }, {
        width: "100%",
        duration:1,
        scrollTrigger: line
    })
})


let mm = gsap.matchMedia()

gsap.to('.h3', {
    opacity:0,
    duration:1,
    y:'700px',
    scrollTrigger: {
        trigger: '.h3',
        start: "-200px top",
        end: "500px top",
        scrub: 1,
    } 
})



gsap.to('.fan', {
    rotation:-7000,
    duration:1,
    scrollTrigger: {
        start:"-200px center",
        end: "10000vh center",
        trigger: '.fan',
        scrub: 3,
        // markers:true,
        pin:true
    }
})

gsap.fromTo('.imga', {
    scale:0,
    opacity:0.5
}, {
    scale:1,
    duration:7,
    scrollTrigger: {
        trigger: '.imga',
        start: "-700px center",
        end: "700px center",
        scrub: 1,
        // markers:true
    } 
})

gsap.to('#curve', {
    filter: "hue-rotate(90deg)",
    duration:1,
    scrollTrigger: {
        trigger: '#curve',
        start: "top top",
        end: "bottom top",
        // markers: true,
        scrub: 1,
    } 
}) 


gsap.fromTo('#logo', {
    scale:0
}, {
scale:1,
duration:1,
})
gsap.fromTo("#menu", {
    y: "-100px",
    opacity:0
}, {
    y:0,
    opacity:1,
    duration:1,
    delay:0.1
})
gsap.fromTo(".h", {
    x:"70px",
    opacity:0
}, {
    x:0,
    opacity:1,
    duration:1,
    delay:0.5
})

gsap.utils.toArray('.qu').forEach(qu => {
    gsap.fromTo(qu, {
        y: "-100px",
        opacity:0
    }, {
        y:0,
        opacity:1,
        duration:1,
        scrollTrigger: {
            trigger: qu,
        }
    })
})
mm.add("(min-width: 1000px)", ()=> {



    gsap.utils.toArray(".ani").forEach(ani => {
        gsap.fromTo(ani, {
            y:"150px",
            scale:.8
        }, {
            y:"-300px",
            scale:1,
            duration:1,
            scrollTrigger: {
                trigger: ani,
                scrub: 1
            }
        })
    })








    gsap.utils.toArray(".student").forEach(student => {
        gsap.fromTo(student, {
            y:"300px",
            scale:.8
        }, {
            y:0,
            scale:1,
            duration:1,
            scrollTrigger: {
                trigger: student,
                scrub: 1
            }
        })
    })





})
gsap.utils.toArray('.pro').forEach(pro => {
    gsap.fromTo(pro, {
        y:"100px",
        opacity:0
    }, {
        y:0,
        opacity:1,
        duration:1,
        scrollTrigger: pro
    })
})

gsap.fromTo('#circle',{
    scale:0
},{
    scale:1,
    duration:4,
    scrollTrigger: "#circle"
})
gsap.fromTo(".linea", {
    width:0
}, {
    width: "100%",
    duration:1,
    scrollTrigger: ".linea"
})




mm.add("(max-width: 1000px)", () => {
    gsap.utils.toArray(".ani").forEach(ani => {
        gsap.fromTo(ani, {
            y:"150px",
            scale:.8
        }, {
            y:"0",
            scale:1,
            duration:1,
            scrollTrigger: {
                trigger: ani,
                // scrub: 1
            }
        })
    })
    
    gsap.utils.toArray(".student").forEach(student => {
        gsap.fromTo(student, {
            opacity:0,
            y:"100px"
            // skewx: 30
        }, {
            y:0,
            opacity:1,
            // skewx:0,
            duration:1,
            scrollTrigger: {
                trigger: student,
            }
        })
    })
})