// script.js
function showMainImage() {
  const mainImageDiv = document.getElementById('mainImage');
  mainImageDiv.classList.toggle('hidden');
}

function showTimelineImage(index) {
  const timelineImageDiv = document.getElementById('timelineImage');
  const images = [
    "photo1.jpg", // replace with actual photo filenames
    "photo2.jpg",
    "photo3.jpg",
    // add more images here
  ];
  const captions = [
    "Our first date ❤️",
    "That special day 🌹",
    "So many memories 🥰",
    // add more captions here
  ];
  
  // Set the chosen image and caption
  timelineImageDiv.innerHTML = `<img src="${images[index - 1]}" alt="Memory ${index}"><p>${captions[index - 1]}</p>`;
  timelineImageDiv.classList.remove('hidden');
}
