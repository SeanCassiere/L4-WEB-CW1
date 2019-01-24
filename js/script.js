function increaseFontSize() {
    txt = document.getElementById('content');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + 2) + 'px';
}
function decreaseFontSize() {
	txt = document.getElementById('content');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize - 2) + 'px';
}

document.getElementById("decreaseFont").addEventListener("click",function(){decreaseFontSize();});
document.getElementById("increaseFont").addEventListener("click",function(){increaseFontSize();});