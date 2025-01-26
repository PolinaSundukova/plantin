import './reset.css'
import './style.css'
import { ScrollTrigger } from "gsap/all";
import { DotLottie } from '@lottiefiles/dotlottie-web';




console.log('js body console test')


const links = document.querySelectorAll('.navigation li a');

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    console.log('nav console test')
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  });
});

const hamburgerBtn = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu_navigation');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const closeIcon = document.querySelector('.close-icon');
const overlay = document.querySelector('.overlay');
const navLinks = document.querySelectorAll('.menu_navigation li a');

hamburgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburgerIcon.classList.toggle('none');
  closeIcon.classList.remove('hidden')
  closeIcon.classList.toggle('block');
  overlay.classList.toggle('active');
  console.log('hamburger console test')
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
  console.log('timeline console test')
  const $timeline = document.querySelector(".timeline");


  let scrollTween = gsap.to(timecodes, {
    xPercent: -100 * (timecodes.length + 2),
    ease: "none",
    scrollTrigger: {
      trigger: $timeline,
      start: "top top",
      end: () => {
        return "+=" + ($timeline.offsetWidth * 10)
      },
      pin: $timeline,
      scrub: 0.5,
      // markers: true
    }
  })

  timecodes.forEach(element => {
    const paragraph = element.querySelectorAll("p");
    let tl = gsap.timeline()

      .from(paragraph, {
        opacity: 0,
        y: -100,
        duration: 2
      })
    ScrollTrigger.create({
      trigger: element,
      containerAnimation: scrollTween,
      animation: tl,

      start: "left 80%",
      end: "right 90%",
      scrub: 1,
      // markers: true
    })
  })


}



const introAnimation = () => {
  console.log('intro console test')
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
    // markers: true
  });
}

const introSecondAnimation = () => {

  const $intro = document.querySelector(".intro")
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

    // markers: true
  });
}




//letters transition
const transitionAnimation = () => {


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
    start: "top 50%",
    end: "bottom 100%",
    scrub: 1,
    // markers: true
  });
}




const typographyAnimation = () => {

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
    // markers: true
  });
}

const typographySecondAnimation = () => {


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
    // markers: true
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


const legacyBgAnimation = () => {

  const legacyBg = gsap.timeline()

    .from(".legacy-text", {
      y: 500,
      opacity: 0,
    })


  ScrollTrigger.create({
    trigger: ".legacy",
    animation: legacyBg,
    start: "top 0%",
    end: "bottom 20%",
    scrub: 1,
    pin: ".legacy",
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
    start: "top 50%",
    end: "bottom 100%",
    scrub: 1,
    // markers: true
  });
}






//typography game

const typographyGame = () => {
  // Map punch classes to letter spaces
  const letterField = document.querySelectorAll('.letter_spaces div')
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
            letterSpace.classList.add("highlight");

            letterSpace.style.color = "var(--c-dark)"
            break; // Stop after updating the first unfilled space
          }
        }
      }
    });
  });
}


const clickReveal = () => {
  // Map each tool item class to its corresponding name
  const toolNames = {
    "tool_item--1": "1. Etching Needle",
    "tool_item--2": "2. Dabber for applying",
    "tool_item--3": "3. Scraper",
    "tool_item--4": "4. Hammer",
    "tool_item--5": "5. Scooper",
    "tool_item--6": "6. Calliper Compasses",
  };

  // Add click event listeners to each tool item
  document.querySelectorAll(".tool_item").forEach((toolItem) => {
    toolItem.addEventListener("click", () => {

      document.querySelectorAll(".tool_item").forEach((item) => item.classList.remove("highlight"));
      toolItem.classList.add("highlight");

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
};






//printing game

const woodblockWorkshop = () => {

  const drawingCanvas = document.getElementById("drawingCanvas");
  const drawingPart = document.querySelector('.drawing_part')
  const ctx = drawingCanvas.getContext("2d");
  const resultCanvas = document.getElementById("resultCanvas");
  const resultCtx = resultCanvas.getContext("2d");
  const doneButton = document.getElementById("doneButton");
  const resultDiv = document.querySelector(".result");
  const animationCanvas = document.getElementById("anim-box");
  const drawingTitle = document.querySelector('.drawing_step');
  const engravingTitle = document.querySelector('.engraving_step');
  const resultTitle = document.querySelector('.result_step');





  let isDrawing = false;

  console.log('MAIN workshop console test')



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


  doneButton.addEventListener("click", () => {

    animationCanvas.style.display = "block";
    doneButton.style.display = "none";
    engravingTitle.style.display = "block";
    drawingTitle.style.display = "none";
    drawingCanvas.style.backgroundColor = "var(--c-white)"




    const animationLottie = new DotLottie({
      autoplay: true,
      loop: false,     // Disable looping
      canvas: document.querySelector("#anim-box"), // Target the canvas container
      src: "assets/engraving.json" // Path to the Lottie animation file
    });

    animationLottie.addEventListener("complete", () => {
      console.log("Animation complete!");
      engravingTitle.style.display = "none";
      resultTitle.style.display = "block";


      drawingPart.style.display = "none"; // Hide animation
      animationCanvas.style.display = "none"; // Hide animation
      resultDiv.style.display = "block"; // Show the result

      console.log('the picture was printed')



      // Mirror the drawing and display it on the papyrus
      const imageData = ctx.getImageData(0, 0, drawingCanvas.width, drawingCanvas.height);
      resultCtx.save();
      resultCtx.scale(-1, 1); // Mirror horizontally
      resultCtx.drawImage(drawingCanvas, -drawingCanvas.width, 0);
      resultCtx.restore();
    },
      { once: true }
    );



    // });


  });
};










const init = () => {
  gsap.registerPlugin(ScrollTrigger);
  console.log('init console test')
  timelineScrollAnimation();
  transitionAnimation();
  introAnimation();
  introSecondAnimation();
  typographyBgAnimation();
  typographyAnimation();
  typographySecondAnimation();
  typographyGame();
  engravingTransitionAnimation();
  engravingsBgAnimation();
  clickReveal();
  woodblockBgAnimation();
  woodblockWorkshop();
  transitionSecondAnimation();
  legacyBgAnimation();

}
init();

