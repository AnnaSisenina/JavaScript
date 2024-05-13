// Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ 
//с интервалом в 3 секунды.

const url = 'https://dog.ceo/api/breeds/image/random';
const dogContainer = document.getElementById('dog-container');

const getData = async () => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data.message;
    } catch (error) {
        console.log(error.message);
    }
};

const renderDogImage = (imageUrl) => {
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'Картинка собаки';
    dogContainer.appendChild(img);
}

const renderDogImages = async() => {
    for (let i = 0; i < 10; i++){
        const imageURL = await getData();
        renderDogImage(imageURL);
        await new Promise(resolve => setTimeout(resolve, 3000));
    }
};


renderDogImages();

