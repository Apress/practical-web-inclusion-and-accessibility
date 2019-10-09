// ACCESSIBLE SLIDER
// Code to show the output of the range input as it's changed.
function outputUpdate(vol) {
	document.querySelector('#js-slider-volume').value = vol;
}

// ARIA LIVE EXAMPLE
// Change to value of a number every 30 seconds inside a div with the aria-live.
var element = document.querySelector('#js-aria-live');
var t = setInterval(function() {
	// Return a random number between 1 and 1,000
	var amount = Math.floor(Math.random() * (1000 - 1 + 1) + 1);
	element.innerHTML = "Current cost of a coffee in Soho: &pound;" + amount;
}, 30000);

// CUSTOM CHECKBOX EXAMPLE
// For the custom markup, click and keypress events are required to set the aria-checked
// value to true or false. This allows a screen readers to let users know what they've changed.
function changeCheckbox(event) {
    if (event.keyCode === 32) {
        event.preventDefault();
    }
    let checkbox = document.querySelector('#checkbox-aria');
    switch(checkbox.getAttribute('aria-checked')) {
        case "true":
            checkbox.setAttribute('aria-checked', "false");
            break;
        case "false":
            checkbox.setAttribute('aria-checked', "true");
            break;
    }
}