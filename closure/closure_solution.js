// clear the screen for testing 
document.body.innerHTML = '';
document.body.style.background = "white";

var nums = [1, 2, 3];

for (var i = 0; i < nums.length; i++) {

    // This variable keeps changing every time we iterate!
    //  It's first value is 1, then 2, then finally 3.
    var num = nums[i];

    // create a DOM element for the number
    var elem = document.createElement('div');

    elem.addEventListener('click', (function (numCopy) {
        return function () {
            alert(numCopy)
        };
    })(num));
}

// finally, let's add this element to the document
document.body.appendChild(elem);