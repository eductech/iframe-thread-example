class Clock {
  _intervalId = NaN
  _languages = ["en", "ru"]
  _toggler = true

  constructor(element) {
    this.element = element
    this._render()
    setInterval(this._render, 1000)
  }

  _render = () => {
    const language = this._languages[+this._toggler];
    this.element.innerHTML = `${new Date().toLocaleTimeString(language)} (current locale is: "${language}")`
  }

  toggle = () => {
    this._toggler ^= true
    this._render()
  }
}

export { Clock }
