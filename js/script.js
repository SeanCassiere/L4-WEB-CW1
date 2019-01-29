function increaseFontSize() {
    docElement = document.getElementById('content');
    style = window.getComputedStyle(docElement, null).getPropertyValue('font-size');
    currentFontSize = parseFloat(style);
    docElement.style.fontSize = (currentFontSize + 2) + 'px';
}

function decreaseFontSize() {
	docElement = document.getElementById('content');
    style = window.getComputedStyle(docElement, null).getPropertyValue('font-size');
    currentFontSize = parseFloat(style);
    docElement.style.fontSize = (currentFontSize - 2) + 'px';
}

document.getElementById("decreaseFont").addEventListener("click",function(){decreaseFontSize();});
document.getElementById("increaseFont").addEventListener("click",function(){increaseFontSize();});