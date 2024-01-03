export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  setCounter(0)
  setInterval(() => setCounter(counter + 1), 1000);
}
