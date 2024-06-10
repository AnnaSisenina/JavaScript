/*
'https://images.dog.ceo/breeds/danish-swedish-farmdog/ebba_003.jpg',
    'https://images.dog.ceo/breeds/pomeranian/pomeranian_black_03.jpg',
    'https://images.dog.ceo/breeds/bullterrier-staffordshire/n02093256_417.jpg',
    'https://images.dog.ceo/breeds/samoyed/n02111889_3988.jpg',
    'https://images.dog.ceo/breeds/dhole/n02115913_1796.jpg'
*/

const url = "https://dog.ceo/api/breeds/image/random";

const getData = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.message;
  } catch (error) {
    console.log(error.message);
  }
};

async function loadImages() {
    const images = [];
  
    for (let index = 0; index < 5; index++) {
      const imageUrl = await getData();
      images.push(imageUrl);
    }
  
    return images;
  }
  
  loadImages().then((images) => {
    let currentIndex = 0;
  
    const slideImage = document.querySelector(".slide-image");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const navigationDots = document.querySelector(".navigation-dots");

function updateSlider() {
  if (images[currentIndex]) {
    slideImage.src = images[currentIndex];
  } else {
    console.error(`Error: Invalid image URL at index ${currentIndex}`);
  }

  const dots = navigationDots.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

images.forEach((_, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");

  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSlider();
  });
  navigationDots.appendChild(dot);
});

updateSlider();
});
