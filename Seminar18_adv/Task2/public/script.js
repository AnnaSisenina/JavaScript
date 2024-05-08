
fetch('/products')
.then(response => response.json())
.then(products => {
    const container = document.querySelector('div.container');
    const template = product_template.content;
    products.forEach(element => {
        const productElement = template.cloneNode(true);
        const reviewBlock = productElement.querySelector(".review_block");
        reviewBlock.dataset.productId = element.id;
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
})
.catch(error => console.error('Ошибка:', error));


function handleReviewSubmit() {
  const container = document.querySelector('div.container');

  container.addEventListener('click', function(event){
    if (event.target.classList.contains('submit_button')) {
      const reviewBlock = event.target.closest('.review_block');
      const productId = reviewBlock.dataset.productId;
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
        fetch('/save-data', {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id: productId, data: reviewText})
        })
        .then(response => {
          if (response.ok) {
            const reviewContainer = document.createElement('div');
            reviewContainer.classList.add('review_container');
            reviewContainer.textContent = reviewText;
            reviewsContainer.appendChild(reviewContainer);
            reviewInput.value = '';
          } else {
            throw new Error('Ошибка при отправке данных на сервер')
          }
        })
        .catch(error => {
          alert(error.message);
        });
      }
    } catch (error) {
      alert(error.message);
    }
    }
  });
}
  
handleReviewSubmit();
