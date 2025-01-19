import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`
const sunriseBackground = () => {


  const sunriseSection = gsap.timeline()
    .to(".boat1", {
      x: 300,
    })
    .to(".boat2", {
      x: 300,
    })

  ScrollTrigger.create({
    trigger: ".scene-one",
    animation: sunriseSection,
    start: "top 0%",
    end: "bottom 0%",
    scrub: 1
  });
}


setupCounter(document.querySelector('#counter'))

const init = () => {
  gsap.registerPlugin(ScrollTrigger);
  // gsap.registerPlugin(MotionPathPlugin);

  sunriseBackground();

}
init();
