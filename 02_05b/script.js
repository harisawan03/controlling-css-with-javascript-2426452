const listItem = document.querySelector(".animals li:nth-child(5) a");

listItem.style.backgroundColor = "orange";

// adds to existing inline styles
listItem.style.fontStyle = 'italic'; 

// replaces all inline styles
//listItem.setAttribute('style', 'font-style: italic;')

console.log(listItem.getAttribute('style'));
