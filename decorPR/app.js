const burBtn = document.querySelector('.burger-menu');
const navLis = document.querySelector('.mobile-nav')
let togg = false;
burBtn.addEventListener('click', ()=>{
  togg = !togg
  if(togg){
    navLis.style.right = '0px';
    console.log("now show me")
    }else{
      navLis.style.right = '-500px';

    console.log("iam gone")
    }
})
const listItems = document.querySelectorAll('.mobile-nav .li');
console.log(listItems); // Should show 6 elements

/*listItems.forEach(item => {
  item.addEventListener('mouseenter',()=>{
    item.style.backgroundColor = '#d4a259'; 
  })
});*/

/*

const images = [
  "decoration plafond/WhatsApp Image 2025-04-03 at 02.32.20(1).jpeg",
  "decoration plafond/WhatsApp Image 2025-04-03 at 02.32.20.jpeg",
  "decoration plafond/WhatsApp Image 2025-04-03 at 02.51.19(1).jpeg",
  "decoration plafond/WhatsApp Image 2025-04-03 at 02.51.19.jpeg",
  "decoration plafond/WhatsApp Image 2025-04-03 at 02.51.20(1).jpeg",
  "decoration plafond/WhatsApp Image 2025-04-03 at 02.51.20.jpeg",
  "decoration plafond/WhatsApp Image 2025-04-03 at 03.05.43.jpeg"
];

let currentIndex = 0;
const slider = document.querySelector("#image-slider img");

function showNextImage() {
  // Fade out
  slider.style.opacity = 0;

  setTimeout(() => {
    // Change image source
    currentIndex = (currentIndex + 1) % images.length;
    slider.src = images[currentIndex];

    // Fade in
    slider.style.opacity = 1;
  }, 500); // match the transition duration in CSS
}

// Start the slideshow
setInterval(showNextImage, 5000);
*/
const images = [
  "decoration plafond/WhatsApp Image 2025-04-03 at 02.32.20(1).jpeg",
  "decoration plafond/WhatsApp Image 2025-04-03 at 02.32.20.jpeg",
  "decoration plafond/WhatsApp Image 2025-04-03 at 02.51.19(1).jpeg",
  "decoration plafond/WhatsApp Image 2025-04-03 at 02.51.19.jpeg",
  "decoration plafond/WhatsApp Image 2025-04-03 at 02.51.20(1).jpeg",
  "decoration plafond/WhatsApp Image 2025-04-03 at 02.51.20.jpeg",
  "decoration plafond/WhatsApp Image 2025-04-03 at 03.05.43.jpeg"
];

const sliderTrack = document.getElementById("slider-track");

// Inject images into track
images.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  sliderTrack.appendChild(img);
});

let currentIndex = 0;

function slideToNext() {
  currentIndex = (currentIndex + 1) % images.length;
  sliderTrack.style.transform = `translateX(-${currentIndex * 100}vw)`;
}

// Start auto-slide
setInterval(slideToNext, 5000);

const container = document.querySelector('.ele-images-container'); // Create a container for the images
const esection = document.querySelector('.emain'); // Create a container for the images
const emain = document.querySelector('.esection'); // Create a container for the images
/*
for (let i = 1; i <= 10; i++) {
  const img = document.createElement('img');
  img.src = `ele/ele${i}.jpeg`;
  img.alt = `Image ${i}`; // Optional: Add alt text
  container.appendChild(img);
}
esection.appendChild(container)
emain.appendChild(esection)*/

// Append the container to the body
const elements = document.querySelectorAll('.two-col, .three-col');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.3 // Adjust this if you want it to appear earlier or later
});

elements.forEach(el => observer.observe(el));





