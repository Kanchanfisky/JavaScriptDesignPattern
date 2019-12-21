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
    // On click...
    elem.addEventListener('click', function () {

        // ... alert num's value at the moment of the click!
        alert(num);

        // Specifically, we're alerting the num variable 
        // that's defined outside of this inner function.
        // Each of these inner functions are pointing to the
        // same `num` variable... the one that changes on
        // each iteration, and which equals 3 at the end of 
        // the for loop.  Whenever the anonymous function is
        // called on the click event, the function will
        //  reference the same `num` (which now equals 3).

    });

};

// finally, let's add this element to the document
document.body.appendChild(elem);