const scrollTo = () => {
    let start = 0
    const SPEED = 0.5
    const pageY = window.pageYOffset
    const coordinateElem = -pageY
    const step = (time:number) => {
      if (!start) start = time
      const progress = time - start
      const r = Math.max(pageY - progress / SPEED, pageY + coordinateElem)
      window.scrollTo(0, r)
      if (r !== pageY + coordinateElem) requestAnimationFrame(step)
    }
  
    requestAnimationFrame(step)
  }
  
  export default scrollTo