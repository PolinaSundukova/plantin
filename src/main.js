import './reset.css'
import './style.css'
import { DotLottie } from '@lottiefiles/dotlottie-web';

new DotLottie({
  autoplay: true,
  loop: true,
  // mode: "reverse",
  // marker: "box", // box, ball, hexa
  canvas: document.querySelector("#anim-box"),
  src: "./assets/engraving.json",
});






const links = document.querySelectorAll('.navigation li a');

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
      // behavior: 'instant'
    });
  });
});

// const hamburgerMenu = document.querySelector('.hamburger_menu')
const hamburgerBtn = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu_navigation');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const closeIcon = document.querySelector('.close-icon');
const overlay = document.querySelector('.overlay');
const navLinks = document.querySelectorAll('.menu_navigation a');

hamburgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburgerIcon.classList.toggle('none');
  closeIcon.classList.remove('hidden')
  closeIcon.classList.toggle('block');
  overlay.classList.toggle('active');
});


navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const targetId = link.getAttribute('href').substring(1); // Remove the "#"
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });

    // Close the menu and remove overlay after scrolling
    setTimeout(() => {
      navMenu.classList.remove('active');
      hamburgerIcon.classList.remove('none');
      closeIcon.classList.remove('block')
      closeIcon.classList.add('none');
      overlay.classList.remove('active');
    }, 500);
  });
});







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
      // markers: true
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
      opacity: 0,
    })
    .to(".intro_gravure--2", {
      x: '45vw',
      opacity: 0,
    }, "<") // trigger second at the


  ScrollTrigger.create({
    trigger: ".intro_gravures",
    animation: introGravure,
    start: "top 20%",
    end: "bottom 0%",
    scrub: 1,
    pin: ".intro_gravures",
    // pin: $intro,
    // markers: true
  });
}

const introSecondAnimation = () => {

  const $intro = document.querySelector(".intro")
  // const $gravures = document.querySelector(".intro_gravures")
  const introGravure = gsap.timeline()

    .from(".intro_article", {
      opacity: 0,
    })


  ScrollTrigger.create({
    trigger: ".intro_article",
    animation: introGravure,
    start: "top 60%",
    end: "bottom 50%",
    scrub: 1,
    // pin: ".intro_gravures",
    // pin: $intro,
    // markers: true
  });
}




//letters transition
const transitionAnimation = () => {

  // const $lettersSection = document.querySelector(".letters_section")
  // const $gravures = document.querySelector(".intro_gravures")
  const lettersMovement = gsap.timeline()

    .from(".transition_1", {
      y: 400,
      duration: 20,
      opacity: 0,
    })
    .from(".transition_7", {
      y: 200,
      opacity: 0,
      duration: 20,
    })
    .from(".transition_3", {
      y: 100,
      duration: 20,
      opacity: 0,
    })
    .from(".transition_8", {
      y: 400,
      duration: 20,
      opacity: 0,
    })
    .from(".transition_2", {
      y: 300,
      duration: 20,
      opacity: 0,
    })

    .from(".transition_6", {
      y: 300,
      duration: 20,
      opacity: 0,
    })
    .from(".transition_5", {
      y: 200,
      duration: 20,
      opacity: 0,
    })


    .from(".transition_4", {
      y: 100,
      opacity: 0,
      duration: 20,
    })


  ScrollTrigger.create({
    trigger: ".letters_section",
    animation: lettersMovement,
    // start: "top 60%",
    start: "top 0%",
    end: "bottom 10%",
    scrub: 1,
    pin: ".letters_section",
    // markers: true
  });
}




const typographyAnimation = () => {

  // const $intro = document.querySelector(".intro")
  const $garamondGravures = document.querySelector(".garamond_gravures")
  const garamondGravure = gsap.timeline()

    .to(".garamond_gravure--1", {
      x: '-45vw',
      opacity: 0,
    })
    .to(".garamond_gravure--2", {
      x: '45vw',
      opacity: 0,
    }, "<") // trigger second at the


  ScrollTrigger.create({
    trigger: ".garamond_gravures",
    animation: garamondGravure,
    start: "top 20%",
    end: "bottom 0%",
    scrub: 1,
    pin: $garamondGravures,
    // pin: $intro,
    // markers: true
  });
}

const typographySecondAnimation = () => {

  // const $intro = document.querySelector(".intro")
  // const $gravures = document.querySelector(".intro_gravures")
  const typographyGravure = gsap.timeline()

    .from(".garamond", {
      opacity: 0,
    })


  ScrollTrigger.create({
    trigger: ".garamond",
    animation: typographyGravure,
    start: "top 60%",
    end: "bottom 50%",
    scrub: 1,
    // pin: ".engravings-gravures",
    // pin: $intro,
    // markers: true
  });
}






const engravingTransitionAnimation = () => {

  gsap.to(".engravings-gravures", {
    duration: 3,
    scrollTrigger: {
      trigger: ".engravings",
      start: "top 90%",
      end: "top 0%",
      // toggleClass: "white",
      // markers: { fontSize: "25px", fontWeight: "bold" },
      scrub: true,
      pin: ".engravings-gravures",
      pinSpacing: false, //set to true to see extra padding added
    },
  });

}


const typographyBgAnimation = () => {

  const typographyBg = gsap.timeline()

    .from(".typography_text", {
      y: 500,
      opacity: 0,
    })


  ScrollTrigger.create({
    trigger: ".typography_intro",
    animation: typographyBg,
    start: "top 00%",
    end: "bottom 20%",
    scrub: 1,
    pin: ".typography_intro",
    pinSpacing: true,
    // markers: true
  });
}



const engravingsBgAnimation = () => {

  const engravingsBg = gsap.timeline()

    .from(".engravings_text", {
      y: 500,
      opacity: 0,
    })


  ScrollTrigger.create({
    trigger: ".engravings_intro",
    animation: engravingsBg,
    start: "top 00%",
    end: "bottom 20%",
    scrub: 1,
    pin: ".engravings_intro",
    pinSpacing: true,
    markers: true
  });
}

const woodblockBgAnimation = () => {

  const woodblockBg = gsap.timeline()

    .from(".woodblock_text", {
      y: 500,
      opacity: 0,
    })


  ScrollTrigger.create({
    trigger: ".woodblocks",
    animation: woodblockBg,
    start: "top 00%",
    end: "bottom 20%",
    scrub: 1,
    pin: ".woodblocks",
    pinSpacing: true,
    // markers: true
  });
}




const transitionSecondAnimation = () => {

  const lettersMovement = gsap.timeline()

    .from(".transition-1", {
      y: 400,
      duration: 20,
      opacity: 0,
    })

    .from(".transition-3", {
      y: 100,
      duration: 20,
      opacity: 0,
    })

    .from(".transition-2", {
      y: 300,
      duration: 20,
      opacity: 0,
    })

    .from(".transition-6", {
      y: 300,
      duration: 20,
      opacity: 0,
    })
    .from(".transition-5", {
      y: 200,
      duration: 20,
      opacity: 0,
    })


    .from(".transition-4", {
      y: 100,
      opacity: 0,
      duration: 20,
    })


  ScrollTrigger.create({
    trigger: ".woodblock_transition",
    animation: lettersMovement,
    start: "top 0%",
    end: "bottom 10%",
    scrub: 1,
    pin: ".woodblock_transition",
    // markers: true
  });
}






//typography game

// document.addEventListener("DOMContentLoaded", () => {

const typographyGame = () => {
  // Map punch classes to letter spaces
  const letterMap = {
    "punch--A": "a_letter",
    "punch--D": "d_letter",
    "punch--G": "g_letter",
    "punch--M": "m_letter",
    "punch--N": "n_letter",
    "punch--O": "o_letter",
    "punch--R": "r_letter",
  };

  document.querySelectorAll(".punch").forEach((punch) => {
    punch.addEventListener("click", () => {
      const punchClass = Array.from(punch.classList).find((cls) => cls.startsWith("punch--"));
      const letterSpaceClass = letterMap[punchClass];

      if (letterSpaceClass) {
        // Find the first unfilled letter space and update it
        const letterSpaces = document.querySelectorAll(`.${letterSpaceClass}`);
        for (const letterSpace of letterSpaces) {
          if (letterSpace.textContent === "?") {
            letterSpace.textContent = punchClass.replace("punch--", "").toUpperCase();
            break; // Stop after updating the first unfilled space
          }
        }
      }
    });
  });
}
// });

document.addEventListener("DOMContentLoaded", () => {
  // Map each tool item class to its corresponding name
  const toolNames = {
    "tool_item--1": "Etching Needle",
    "tool_item--2": "Dabber for applying",
    "tool_item--3": "Scraper",
    "tool_item--4": "Hammer",
    "tool_item--5": "Scooper",
    "tool_item--6": "Calliper Compasses",
  };

  // Add click event listeners to each tool item
  document.querySelectorAll(".tool_item").forEach((toolItem) => {
    toolItem.addEventListener("click", () => {
      const toolClass = Array.from(toolItem.classList).find((cls) => cls.startsWith("tool_item--"));
      if (toolClass) {
        const toolName = toolNames[toolClass];
        if (toolName) {
          // Update the content of the paragraph with the tool name
          document.querySelector(".tool_name").textContent = toolName;
        }
      }
    });
  });
});




//printing game

// document.addEventListener("DOMContentLoaded", () => {  //removeDOM
const woodblockWorkshop = () => {

  const drawingCanvas = document.getElementById("drawingCanvas");
  const ctx = drawingCanvas.getContext("2d");
  const resultCanvas = document.getElementById("resultCanvas");
  const resultCtx = resultCanvas.getContext("2d");
  const doneButton = document.getElementById("doneButton");
  const engravingAnimation = document.getElementById("engravingAnimation");
  const resultDiv = document.querySelector(".result");

  let isDrawing = false;




  // remove functions - put in init

  const startDrawing = (e) => {
    e.preventDefault();
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(getX(e), getY(e));
  }

  const draw = (e) => {
    if (!isDrawing) return;
    e.preventDefault();
    ctx.lineTo(getX(e), getY(e));
    ctx.strokeStyle = "black"; // Customize line color
    ctx.lineWidth = 2; // Customize line width
    ctx.stroke();
  }

  const stopDrawing = () => {
    // e.preventDefault();
    isDrawing = false;
    ctx.closePath();
  }

  const getX = (e) => {
    return (e.clientX || (e.touches && e.touches[0].clientX)) - drawingCanvas.getBoundingClientRect().left;
  }

  const getY = (e) => {
    return (e.clientY || (e.touches && e.touches[0].clientY)) - drawingCanvas.getBoundingClientRect().top;
  }

  // Drawing functionality
  drawingCanvas.addEventListener("mousedown", startDrawing);
  drawingCanvas.addEventListener("mousemove", draw);
  drawingCanvas.addEventListener("mouseup", stopDrawing);
  drawingCanvas.addEventListener("mouseout", stopDrawing);
  drawingCanvas.addEventListener("touchstart", startDrawing);
  drawingCanvas.addEventListener("touchmove", draw);
  drawingCanvas.addEventListener("touchend", stopDrawing);

  // Handle "Done Drawing" button click
  doneButton.addEventListener("click", () => {
    // Show the Lottie animation container
    engravingAnimation.style.display = "block";
    console.log('engraving video playing')

    // Load the Lottie animation
    const animation = lottie.loadAnimation({

      container: engravingAnimation, // Target the Lottie container
      renderer: "svg",
      loop: false,
      autoplay: true,
      path: "./src/assets/engraving.json", // Lottie animation JSON file
    });

    // When the animation finishes
    animation.addEventListener("complete", () => {
      drawingCanvas.style.display = "none"; // Hide animation
      engravingAnimation.style.display = "none"; // Hide animation
      doneButton.style.display = "none";
      resultDiv.style.display = "block"; // Show the result
      console.log('the picture was printed')

      // Mirror the drawing and display it on the papyrus
      const imageData = ctx.getImageData(0, 0, drawingCanvas.width, drawingCanvas.height);
      resultCtx.save();
      resultCtx.scale(-1, 1); // Mirror horizontally
      resultCtx.drawImage(drawingCanvas, -drawingCanvas.width, 0);
      resultCtx.restore();
    });
  });
}
// });










const init = () => {
  gsap.registerPlugin(ScrollTrigger);
  // gsap.registerPlugin(MotionPathPlugin);
  timelineScrollAnimation();
  transitionAnimation();
  introAnimation();
  introSecondAnimation();
  typographyBgAnimation();

  typographyAnimation();
  typographySecondAnimation();

  typographyGame();
  // engravingMagicAnimation();
  engravingTransitionAnimation();
  engravingsBgAnimation();
  woodblockBgAnimation();
  woodblockWorkshop();
  transitionSecondAnimation();
}
init();
