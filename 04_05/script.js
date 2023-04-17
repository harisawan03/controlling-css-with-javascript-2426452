const hue = document.querySelector("#hue");
const saturation = document.querySelector("#saturation");
const lightness = document.querySelector("#lightness");
const alpha = document.querySelector("#alpha");
const colorSwatch = document.querySelector(".color-swatch");

const rootRules = document.styleSheets[0].cssRules[0];

hue.addEventListener('input', updateSwatch);
saturation.addEventListener('input', updateSwatch);
lightness.addEventListener('input', updateSwatch);
alpha.addEventListener('input', updateSwatch);

function updateSwatch() {
  colorSwatch.innerHTML = `hsla(${hue.value}, ${saturation.value}%, ${lightness.value}%, ${alpha.value/100});`;
  rootRules.style.setProperty('--hue', hue.value);
  rootRules.style.setProperty('--saturation', saturation.value);
  rootRules.style.setProperty('--lightness', lightness.value);
  rootRules.style.setProperty('--alpha', alpha.value/100);

  if (lightness.value < 50) {
    colorSwatch.style.color = 'white';
  } else {
    colorSwatch.style.color = 'black';
  }
}
