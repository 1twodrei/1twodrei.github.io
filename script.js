// Function to create circles with random colors
function createCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.left = `${Math.random() * window.innerWidth}px`;
    circle.style.top = `${Math.random() * window.innerHeight}px`;
  
    // Generate a random color for each circle
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    circle.style.backgroundColor = randomColor;
  
    document.querySelector('.circle-container').appendChild(circle);
  }
  
  // Create multiple circles
  for (let i = 0; i < 20; i++) {
    createCircle();
  }
  