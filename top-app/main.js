import './style.css'
import { Controls } from './Controls.js'
import { setupExpensiveBackgroundTask } from './expensiveBackgroundTask.js'

document.querySelector('#app').innerHTML = `
  <div>
    <div class="controls">
      <button id="toggle" type="button">Toggle</button>
      <div id="status"></div>
    </div>
  </div>
`

class App {
  constructor() {
    new Controls(document.querySelector('#toggle'))

    setupExpensiveBackgroundTask(5000, document.querySelector('#status'))
  }
}

new App()
