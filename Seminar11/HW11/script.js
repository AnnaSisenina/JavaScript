const parseData = JSON.parse(data);
const container = document.querySelector('.catalog_wraper');

const template = card_template.content;
parseData.forEach(element => {
    const newTemplate = template.cloneNode(true);
    newTemplate.querySelector(".card_image img").src = element.img;
    newTemplate.querySelector(".card_description h4").innerHTML = element.title;
    newTemplate.querySelector(".card_description p").innerHTML = element.description;
    newTemplate.querySelector(".card_description span").innerHTML = element.price;
    container.appendChild(newTemplate);
});