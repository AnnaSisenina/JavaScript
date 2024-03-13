const data = JSON.parse(dataInfo);
const container = document.querySelector('div.container');
data.forEach(element => {
    const divEl = document.createElement('div');
    const title = document.createElement('h1');
    const text = document.createElement('p');
    const img = document.createElement('img');
    title.textContent = element.heading;
    text.textContent = element.text;
    img.src = element.url;
    img.style.width = element.width + "px";
    img.style.height = element.height + "px";
    divEl.appendChild(img);
    divEl.appendChild(title);
    divEl.appendChild(text);
    divEl.classList.add(element.class);
    container.appendChild(divEl);
});