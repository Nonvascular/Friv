var currentImg = 0;
var imgs = document.querySelectorAll('.slider img');
let dots = document.querySelectorAll('.dot');
var interval = 10000;

var timer = setInterval(changeSlide, interval);

// Loop through each image and set its opacity to 0 (invisible)
// Also remove the 'active' class from corresponding dots
function changeSlide(n) {
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].style.opacity = 0;
    dots[i].className = dots[i].className.replace(' active', '');
  }

  // Calculate the index of the next image to show
  currentImg = (currentImg + 1) % imgs.length;

  // If a specific slide index (n) is provided, handle it
  if (n != undefined) {
    // Clear the existing timer
    clearInterval(timer);
    // Set a new timer to continue changing slides after a certain interval
    timer = setInterval(changeSlide, interval);
    // Update the currentImg index to the provided value (n)
    currentImg = n;
  }

  // Make the current image visible by setting its opacity to 1
  // Also add the 'active' class to the corresponding dot to indicate it's the active slide
  imgs[currentImg].style.opacity = 1;
  dots[currentImg].className += ' active';
}