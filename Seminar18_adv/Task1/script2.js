/*
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, 
но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. 
Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

Вы можете использовать этот массив initialData для начальной загрузки данных при запуске вашего приложения. */

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: "1",
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: "2",
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: "3",
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: "4",
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];
const container = document.querySelector('div.container');

const template = product_template.content;
initialData.forEach(element => {
  
  const productElement = template.cloneNode(true);
  productElement.querySelector('h2.product_name').textContent=element.product;

  const reviewContainer = productElement.querySelector('.reviews');
  element.reviews.forEach(review => {
    const reviewElement = document.createElement('div');
    reviewElement.classList.add('review_container');
    reviewElement.textContent = review.text;
    reviewContainer.appendChild(reviewElement);
  })
  container.appendChild(productElement);
});

function handleReviewSubmit() {
  const container = document.querySelector('div.container');

  container.addEventListener('click', function(event){
    if (event.target.classList.contains('submit_button')) {
      const reviewInput = event.target.parentNode.querySelector('.review_input')
      const reviewsContainer = event.target.parentNode.querySelector('.reviews');
      const reviewText = reviewInput.value.trim();
      try {
        if (reviewText.length < 10 ) {
          throw new Error ("Отзыв должен быть не меньше 10 символов");
        }
      else if (reviewText.length > 500 ) {
          throw new Error ("Отзыв должен быть не больше 500 символов")
        }
      else {
        const reviewContainer = document.createElement('div');
        reviewContainer.classList.add('review_container');
        reviewContainer.textContent = reviewText;
        reviewsContainer.appendChild(reviewContainer);
        reviewInput.value = '';
      }
    } catch (error) {
      alert(error.message);
    }
    }

  });
}
  

handleReviewSubmit();
