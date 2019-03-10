console.log('testing. testing. 1 2 3');

// when we click any .picture-frame
// A const is a "constant" variable
// which means it cannot be reassigned
const targetElements = document.querySelectorAll('[data-target]');
const bigPic = document.querySelector('[data-output]');

// we see an enlarged version of the image that is 
// inside that.picture-frame

function respondToClick(event) {
  // don't forget to use `let` or `const` when first assigning
  // a variable!
    imgSrc = event.target.getAttribute('src');
    bigPic.src = imgSrc;
    bigPic.classList.remove('hidden'); // nice.
}

function attachClickHandler(oneElement) {
    // This is how we handle one element.
    oneElement.addEventListener("click", respondToClick);
}


targetElements.forEach(attachClickHandler);

bigPic.addEventListener('click', hideAway);

function hideAway (event) {
    event.target.classList.add('hidden');
}

const data = [
    'http://www.reddit.com',
    'http://www.facebook.com',
    'http://www.espn.com',
];

function goAfter2Seconds(url) {
    setTimeout(function () {
        window.location = url;
    }, 2000);
}

function logIt(event) {
  event.preventDefault();
  console.log(`you clicked ${event.target.href}`); // Don't forget those semi-colons!
  goAfter2Seconds(event.target.href);
}

const navElement = document.querySelector('[data-nav]');
navElement.addEventListener('click', logIt);

data.forEach(function (url) {
    const newAnchor = document.createElement('a');
    newAnchor.textContent = url;
    newAnchor.setAttribute('href', url);

    // newAnchor.addEventListener('click', logIt)

    navElement.append(newAnchor);
});
