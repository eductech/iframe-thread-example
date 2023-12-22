class Controls {
  constructor(toggleButton, clock) {
    toggleButton.onclick = clock.toggle
  }
}

export { Controls }
