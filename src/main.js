import './style.css'

const hamburgerBtn = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu_navigation');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const closeIcon = document.querySelector('.close-icon');
const overlay = document.querySelector('.overlay');

hamburgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburgerIcon.classList.toggle('none');
  closeIcon.classList.remove('hidden')
  closeIcon.classList.toggle('block');
  overlay.classList.toggle('active');
});



//pin - for two-halfs img to be stacked while the text is appearing between them

const timelineScrollAnimation = () => {
  const timecodes = gsap.utils.toArray(".timeline .timecode");
  const $timecodes = document.querySelector(".timecodes");
  // const $flow = document.querySelector(".flow");

  const $timeline = document.querySelector(".timeline");

  console.log(timecodes.length)

  let scrollTween = gsap.to(timecodes, {
    xPercent: -100 * (timecodes.length + 2),
    ease: "none",
    scrollTrigger: {
      trigger: $timeline,
      start: "top top",
      end: () => {
        return "+=" + ($timeline.offsetWidth)
      },
      pin: $timeline,
      scrub: 1,
      markers: true
    }
  })

  timecodes.forEach(element => {
    // const title = element.querySelector("h1");
    const paragraph = element.querySelectorAll("p");
    //
    let tl = gsap.timeline()
      // .from(title, {
      //   opacity: 0,
      //   x: "-50",
      //   duration: 0.5
      // })
      .from(paragraph, {
        opacity: 0,
        y: -100,
        // y: "+30",
        duration: 2
      })
    ScrollTrigger.create({
      trigger: element,
      containerAnimation: scrollTween,
      animation: tl,
      // start: "top 100%",
      // end: "bottom -100%",
      start: "left 80%",
      end: "right 90%",
      scrub: 1,
      // markers: true
    })
  })


}



const introAnimation = () => {

  const $intro = document.querySelector(".intro")
  const $gravures = document.querySelector(".intro_gravures")
  const introGravure = gsap.timeline()

    .to(".intro_gravure--1", {
      x: '-45vw',
    })
    .to(".intro_gravure--2", {
      x: '45vw',
    })

  // .to([".intro_gravure--1", ".intro_gravure--2"], {
  //   x: -100,
  // })

  // .to([
  //   { targets: ".intro_gravure--1", x: -100 },
  //   { targets: ".intro_gravure--2", x: 100 }
  // ], {
  //   duration: 1,
  // });

  ScrollTrigger.create({
    trigger: ".intro",
    animation: introGravure,
    start: "top 20%",
    end: "bottom 80%",
    scrub: 1,
    pin: $intro,
    // markers: true
  });
}

const introSecondAnimation = () => {

  const $intro = document.querySelector(".intro")
  const $gravures = document.querySelector(".intro_gravures")
  const introGravure = gsap.timeline()

    .to(".intro_gravures", {
      //x: 700,
      scrollTrigger: {
        trigger: ".logo_intro",
        start: "top 20%",
        end: "bottom 30%",
        // toggleClass: "white",
        markers: { fontSize: "25px", fontWeight: "bold" },
        scrub: true,
        pin: ".intro_gravures",
        pinSpacing: false, //set to true to see extra padding added
      },
    });

}



const init = () => {
  gsap.registerPlugin(ScrollTrigger);
  // gsap.registerPlugin(MotionPathPlugin);
  timelineScrollAnimation();
  // introAnimation();
  // introSecondAnimation();

}
init();
