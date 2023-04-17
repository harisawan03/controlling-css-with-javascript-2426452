const styleSheets = document.styleSheets;
const listButton = document.getElementById("list");
const gridButton = document.getElementById("grid");

listButton.classList.add("current");

console.log(styleSheets);
styleSheets[1].disabled = true;

gridButton.onclick = function () {
  gridButton.classList.add('current');
  listButton.classList.remove('current');
  styleSheets[1].disabled = false;
}

listButton.onclick = function () {
  listButton.classList.add('current');
  gridButton.classList.remove('current');
  styleSheets[1].disabled = true;
}
