import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { Clock } from './Clock.js'
import { Controls } from './Controls.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div id="clock">Press start button to turn on the clock</div>
    <div class="controls">
      <button id="toggle" type="button">Toggle</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

class App {
  constructor() {
    new Controls(
      document.querySelector('#toggle'),
      new Clock(document.querySelector('#clock'))
    )
  }
}

new App()
