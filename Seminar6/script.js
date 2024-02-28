//1. Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль
const first = document.querySelector('div#block > p');
// console.log(first.innerHTML);

// 2. Получите ссылку на первый абзац с классом www. и вывести его в консоль
const www = document.querySelector("div#block > p.www");
// console.log(www.innerHTML);

// Вам необходимо поменять текст внутри ссылки на “link text js”
// Заменить href, на значение https://developer.mozilla.org/ru/ 
const link = document.querySelector("a.link");
link.innerHTML = "link text js";
link.href = "https://developer.mozilla.org/ru/";
// console.log(link);

// document.querySelector("img.photo").src = "https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666206241_12-mykaleidoscope-ru-p-kartinka-na-zastavku-oboi-12.jpg";

// Создайте новый элемент p
// Добавьте в него текст “Новый текстовый элемент”
// Добавьте созданный элемент внутри <div class="content"></div>
// Удалите добавленный узел 
let newP = document.createElement("p");
newP.textContent = "Новый текстовый элемент";
const content = document.querySelector("div.content");
content.appendChild(newP);
newP.remove();

// Создать элемент button, добавить в блок <div class="content"></div>
// При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку
const button = document.createElement("button");
button.textContent = "Отправить";
content.appendChild(button);
let counter = 0;
button.addEventListener("click", (e) => {
    counter++;
    console.log(counter);
    e.target.textContent = "Текст отправлен";
});