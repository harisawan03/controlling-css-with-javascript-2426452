const styleSheet = document.styleSheets[0];
const myInput = document.querySelector('#degrees');

myInput.addEventListener('change', (e) => {
  let rotateVal = myInput.value;
  styleSheet.cssRules[6].styleMap.set('rotate', rotateVal+'deg');
  styleSheet.cssRules[6].styleMap.set('transition', 'rotate 1s');
})

