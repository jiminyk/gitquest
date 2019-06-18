
/*
    This code grabs the button from popup.html and 
    requests the color value from storage. It then 
    applies the color as the background of the button. 
    Include a script tag to popup.js in popup.html.
*/

let colorChange = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data){
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element){
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
};