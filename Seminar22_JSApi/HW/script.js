import { accessKey } from "./config.js";

const collectionId = "1065976"; // ID коллекции "Earth"

const headers = {
  Authorization: `Client-ID ${accessKey}`,
};
const url = `https://api.unsplash.com/collections/${collectionId}/photos?per_page=1`;
const initialJson = [
  {
    name: "Casey Horner",
    url: "https://images.unsplash.com/photo-1502989642968-94fbdc9eace4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjIxMjV8MHwxfGNvbGxlY3Rpb258MnwxMDY1OTc2fHx8fHwyfHwxNzE4Mzc0MDM0fA&ixlib=rb-4.0.3&q=80&w=1080",
    likes: 0,
  },
  {
    name: "Tim Patch",
    url: "https://images.unsplash.com/photo-1536632856133-3a3441454dd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjIxMjV8MHwxfGNvbGxlY3Rpb258M3wxMDY1OTc2fHx8fHwyfHwxNzE4Mzc0MDM0fA&ixlib=rb-4.0.3&q=80&w=1080",
    likes: 0,
  },
  {
    name: "Boris Baldinger",
    url: "https://images.unsplash.com/photo-1539081034274-b9991e9829d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjIxMjV8MHwxfGNvbGxlY3Rpb258NHwxMDY1OTc2fHx8fHwyfHwxNzE4NTI2OTIzfA&ixlib=rb-4.0.3&q=80&w=1080",
    likes: 0,
  },
  {
    name: "Yucel Moran",
    url: "https://images.unsplash.com/photo-1586553720331-2f15f358b291?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjIxMjV8MHwxfGNvbGxlY3Rpb258NXwxMDY1OTc2fHx8fHwyfHwxNzE4NTI2OTIzfA&ixlib=rb-4.0.3&q=80&w=1080",
    likes: 0,
  },
];

const lskey = "images";

if (!localStorage.getItem(lskey)) {
  localStorage.setItem(lskey, JSON.stringify(initialJson));
}

const fetchPhotos = async () => {
  const response = await fetch(url, { headers });
  if (!response.ok) {
    throw new Error("Ошибка при загрузке данных");
  }
  const data = await response.json();
  return data;
};


fetchPhotos().then((data) => {
  const images = JSON.parse(localStorage.getItem(lskey));
  const newImageUrl = data[0].urls.regular;
  const uniqueUrls = new Set(images.map(img => img.url));
 
  if (!uniqueUrls.has(newImageUrl)){
    images.push({
      likes: 0,
      name: `${data[0].user.name}`,
      url: `${data[0].urls.regular}`,
    });
  };
  
  localStorage.setItem(lskey, JSON.stringify(images));

  let currentIndex = images.length-1;
  const slideImage = document.querySelector(".slide-image");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const authorName = document.querySelector(".author");
  const likeCounter = document.querySelector(".like-counter");
  const likeIcon = document.querySelector(".like-icon");

  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);
  likeIcon.addEventListener("click", addLike);
  updateSlider();

  function updateSlider() {
    if (images[currentIndex]) {
      const photoData = images[currentIndex];
      slideImage.src = photoData.url;
      authorName.textContent = photoData.name;
      likeCounter.textContent = photoData.likes;
    } else {
      console.error(`Error: Invalid image URL at index ${currentIndex}`);
    }
  }

  function prevSlide(currentIndex) {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
  }

  function addLike() {
    let likesNumber = likeCounter.textContent;
    likesNumber++;
    likeCounter.textContent = likesNumber;
    images[currentIndex].likes = likesNumber;
    localStorage.setItem(lskey, JSON.stringify(images));
  }
});
