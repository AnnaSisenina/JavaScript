// const blockEl = document.querySelector("div.block");
// const item1 = document.createElement("div");
// item1.setAttribute("class", "item");
// item1.innerText = "Элемент внутри";
// blockEl.appendChild(item1);
// item1.setAttribute("class", item1.classList + " item_1");


// const textEl = document.querySelector("div.elem div.content p.text");
// console.log(textEl.previousElementSibling);
// console.log(textEl.parentElement);
// console.log(document.querySelector("div.elem img"));
// console.log(document.querySelector("div.elem img").parentElement.parentElement);


// const h2El = document.querySelector("h2.subtitle");
// let curEl = h2El;
// while (curEl.parentNode != null) {
//     curEl = curEl.parentNode;
//     console.log(curEl);
// }


const inputEl = document.querySelector("form input");
const btnEl = document.querySelector("form button.btn");
btnEl.addEventListener("click", () => {
    if (inputEl.value === "") {
        const h2El = document.createElement("h2");
        h2El.innerHTML = "вы не заполнили поле ввода";
        h2El.style.border = "1px solid red";
        inputEl.parentElement.appendChild(h2El);
    }
});