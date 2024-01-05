function createCircle() {
  const circle = document.createElement('div');
  circle.classList.add('circle');
  circle.style.left = `${Math.random() * window.innerWidth}px`;
  circle.style.top = `${Math.random() * window.innerHeight}px`;

  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  circle.style.backgroundColor = randomColor;

  document.querySelector('.circle-container').appendChild(circle);

  const scaleFactor = Math.random() * 0.8 + 0.5;
  const newColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

  let currentScale = 1;
  let currentColor = randomColor;

  const pulsate = () => {
    currentScale = currentScale === 1 ? scaleFactor : 1;

    
    const colorTransitionStep = 10; // Number of steps for color transition
    const colorStep = [
      (parseInt(currentColor.substring(4, 7)) - parseInt(newColor.substring(4, 7))) / colorTransitionStep,
      (parseInt(currentColor.substring(9, 12)) - parseInt(newColor.substring(9, 12))) / colorTransitionStep,
      (parseInt(currentColor.substring(14, 17)) - parseInt(newColor.substring(14, 17))) / colorTransitionStep
    ];

    const transitionColor = () => {
      let [r, g, b] = currentColor.substring(4, currentColor.length - 1).split(', ');
      r = Math.max(0, Math.min(255, parseInt(r) - colorStep[0]));
      g = Math.max(0, Math.min(255, parseInt(g) - colorStep[1]));
      b = Math.max(0, Math.min(255, parseInt(b) - colorStep[2]));

      currentColor = `rgb(${r}, ${g}, ${b})`;
      circle.style.backgroundColor = currentColor;

      if (currentColor !== newColor) {
        setTimeout(transitionColor, 50); //  transition speed  (higher values == slower transition)
      }
    };

    transitionColor();
    circle.style.transform = `scale(${currentScale})`;

    setTimeout(pulsate, Math.random() * 800 + 200);
  };

  pulsate();
}

setInterval(createCircle, 4400);
  
