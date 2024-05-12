const container = document.querySelector('.container');
const template = document.querySelector('.product_template');
const templateContent = template.content;

const keys = Object.keys(localStorage);

keys.forEach(element => {
    const productElement = templateContent.cloneNode(true);
    
    const reviewBlock = productElement.querySelector('.review_block');
    const productName = productElement.querySelector('.product_name');
    productName.textContent = element;
    
    const reviewContainer = productElement.querySelector('.reviews');
    reviewContainer.style.display = 'none';
    
    let reviewsArray = JSON.parse(localStorage.getItem(element));


    reviewsArray.forEach((review, index) => {
        const reviewElement = document.createElement('div');
          reviewElement.classList.add('review_container');
          
          const currentDate = new Date(review[1]);
          reviewElement.textContent = currentDate.toISOString().split('T')[0] + ": " + review[0];
          
          const deleteButton = document.createElement('button');
          deleteButton.classList.add('delete_button');
          deleteButton.textContent= "Удалить отзыв";
          
          reviewContainer.appendChild(reviewElement);
          reviewContainer.appendChild(deleteButton);   
          
         deleteButton.addEventListener('click', function() {
            const reviewElement = this.previousElementSibling;;
            const reviewData = reviewElement.textContent;

            reviewsArray.splice(index, 1); 
            localStorage.setItem(element, JSON.stringify(reviewsArray));

            reviewElement.remove();
            deleteButton.remove();
        });   
    });

    productName.addEventListener('click', function() {
        if (reviewContainer.style.display === 'none') {
            reviewContainer.style.display = 'block';
        } else {
            reviewContainer.style.display = 'none';
        }
    });

container.appendChild(reviewBlock);
});

