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


document.addEventListener("DOMContentLoaded", () => {
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
});

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






document.addEventListener("DOMContentLoaded", () => {
  const drawingCanvas = document.getElementById("drawingCanvas");
  const ctx = drawingCanvas.getContext("2d");
  const resultCanvas = document.getElementById("resultCanvas");
  const resultCtx = resultCanvas.getContext("2d");
  const doneButton = document.getElementById("doneButton");
  const engravingAnimation = document.getElementById("engravingAnimation");
  const resultDiv = document.querySelector(".result");

  let isDrawing = false;

  // Drawing functionality
  drawingCanvas.addEventListener("mousedown", startDrawing);
  drawingCanvas.addEventListener("mousemove", draw);
  drawingCanvas.addEventListener("mouseup", stopDrawing);
  drawingCanvas.addEventListener("mouseout", stopDrawing);
  drawingCanvas.addEventListener("touchstart", startDrawing);
  drawingCanvas.addEventListener("touchmove", draw);
  drawingCanvas.addEventListener("touchend", stopDrawing);

  function startDrawing(e) {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(getX(e), getY(e));
  }

  function draw(e) {
    if (!isDrawing) return;
    ctx.lineTo(getX(e), getY(e));
    ctx.strokeStyle = "black"; // Customize line color
    ctx.lineWidth = 2; // Customize line width
    ctx.stroke();
  }

  function stopDrawing() {
    isDrawing = false;
    ctx.closePath();
  }

  function getX(e) {
    return (e.clientX || (e.touches && e.touches[0].clientX)) - drawingCanvas.getBoundingClientRect().left;
  }

  function getY(e) {
    return (e.clientY || (e.touches && e.touches[0].clientY)) - drawingCanvas.getBoundingClientRect().top;
  }

  // Handle "Done Drawing" button click
  doneButton.addEventListener("click", () => {
    // Show the Lottie animation container
    engravingAnimation.style.display = "block";

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
      engravingAnimation.style.display = "none"; // Hide animation
      resultDiv.style.display = "block"; // Show the result

      // Mirror the drawing and display it on the papyrus
      const imageData = ctx.getImageData(0, 0, drawingCanvas.width, drawingCanvas.height);
      resultCtx.save();
      resultCtx.scale(-1, 1); // Mirror horizontally
      resultCtx.drawImage(drawingCanvas, -drawingCanvas.width, 0);
      resultCtx.restore();
    });
  });
});










const init = () => {
  gsap.registerPlugin(ScrollTrigger);
  // gsap.registerPlugin(MotionPathPlugin);
  timelineScrollAnimation();
  // introAnimation();
  // introSecondAnimation();

}
init();
