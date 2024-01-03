import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { Clock } from './Clock.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div id="clock"></div>
    <iframe src="http://two.com:9002"></iframe>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

class App {
  constructor() {
    const clock = new Clock(document.querySelector('#clock'))
    window.addEventListener("message", ({ data }) => {
      if (data === "toggle") clock.toggle()
    })
  }
}

new App()
