class Controls {
  constructor(toggleButton) {
    toggleButton.onclick = () => parent.postMessage("toggle", "*")
  }
}

export { Controls }
