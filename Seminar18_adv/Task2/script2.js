/*
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, 
но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.
Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.
Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. 
Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.
При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.
Вы можете использовать этот массив initialData для начальной загрузки данных при запуске вашего приложения. */


const fs = require('fs');
const express = require ('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); 
});

app.get('/products', (req, res) => {
  let data;
  try {
  data = fs.readFileSync('data.js', 'utf8');
  } catch (err) {
  console.error('Ошибка чтения файла:', err);
  }
  const products = JSON.parse(data);
  res.json(products);
});


app.post('/save-data', (req, res) => {
  const id = Number(req.body.id);
  const data = req.body.data;
  const newReview = { text: `${data}` };

  fs.readFile('data.js', 'utf8', (err, data) => {
    if(err) {
      console.error('Ошибка чтения файла:', err);
      res.status(500).json({error: "Ошибка сервера"});
      return;
    }
    
    const products = JSON.parse(data);
    const productIndex = products.findIndex(product => product.id === id);
    

    if(productIndex !== -1) {
      products[productIndex].reviews.push(newReview);

      fs.writeFile('data.js', JSON.stringify(products, null, 2), (err) => {
        if (err) {
          console.error("Ошибка записи файла:", err);
          res.status(500).json({error: "Ошибка сервера"});
        } else {
          res.status(200).json({message: "Отзыв успешно добавлен"});
        }
      });
    } else {
      res.status(404).json({error: "Продукт не найден"})
    }
  });
});

app.listen(3000, () => {
  console.log('Сервер запущен на http://localhost:3000')
});