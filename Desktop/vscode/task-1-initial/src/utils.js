export function getRandomColor() {
    document.body.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`
  }

  function getRandom(min, max){
    return Math.ceil(Math.random() * (max - min) + min);
  }