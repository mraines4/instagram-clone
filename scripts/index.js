console.log('testing. testing. 1 2 3');

// when we click any .picture-frame
// A const is a "constant" variable
// which means it cannot be reassigned
const targetElements = document.querySelectorAll('[data-target]');

// we see an enlarged version of the image that is 
// inside that.picture-frame

function respondToClick() {
    console.log("I");
    console.log('AM');
    console.log('PUPPER!');
}

targetElements[0].addEventListener("click", respondToClick);