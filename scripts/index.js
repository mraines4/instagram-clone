console.log('testing. testing. 1 2 3');

// when we click any .picture-frame
// A const is a "constant" variable
// which means it cannot be reassigned
const targetElements = document.querySelectorAll('[data-target]');

// we see an enlarged version of the image that is 
// inside that.picture-frame

function respondToClick(event) {
    console.log("I");
    console.log('AM');
    console.log('PUPPER!');

    console.log(event.target);
    // add the "big" class to the thing that got clicked

    event.target.classList.toggle('big');
}

function attachClickHandler(oneElement) {
    // This is how we handle one element.
    oneElement.addEventListener("click", respondToClick);
}


targetElements.forEach(attachClickHandler);

const bigPic = document.querySelector('[data-output]');