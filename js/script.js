function realGetFontSize(){
    if (document.html.style.fontSize == ""){
        document.html.style.fontSize == "1.0rem"
    }
    document.getElementById('nowFontSize').innerHTML = 'Working';
//  document.html.style.fontSize = parseFloat(document.html.style.fontSize) + (1 * 0.2) + 'rem';
}

//document.getElementById("nowFontSizeBtn").addEventListener("click",function(){document.getElementById('nowFontSize').innerHTML = 'Working';});
//document.getElementById("nowFontSizeBtn").addEventListener("click",function(){realGetFontSize();});
//document.getElementById("nowFontSizeBtn").addEventListener("click",function(){document.getElementById('nowFontSize').innerHTML = document.html.style.fontSize;+"Check"});
document.getElementById("nowFontSizeBtn").addEventListener("click",function(){var elem = document.getElementById("lines");var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("font-size");document.getElementById("nowFontSize").innerHTML = theCSSprop;});