const myPromis = new Promise((resolve, reject) => {

});
console.log(myPromis);
myPromis.then(res => res.json())
.then(data => console.log(data)
.catch(error => console.error(error)))

const token = 'MKL7foBclHj9vwoE91ggoQ1SEXTEgFZudCGfi0PM';
const url = 'https://api.nasa.gov/planetary/apod?api_key=' + token + '&count=10';

const getData = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data
    } catch (error) {
        console.log(error.message);
    }
}

const result = await getData(url);
console.log(result);

const body = document.querySelector('body');

result.forEach(element => {
    body.insertAdjacentHTML('beforeend', `<figure>
    <img src="${element.url}">
    <figcaption>${element.explanation}</figcaption>
    </figure>`)
});
