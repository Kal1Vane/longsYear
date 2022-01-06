const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};
function sliderMini() {
let number = getRandomInteger(2,8);
document.body.style.backgroundImage = `url(img/winter${number}.jpg)`;
}

setInterval(sliderMini,6000);
