document.querySelector('.submit_button').addEventListener('click', () =>{
    const productNameTextarea = document.querySelector('.product_name');
    const productReviewTextarea = document.querySelector('.review_input');
    
    const productName = productNameTextarea.value;
    const productReview = productReviewTextarea.value;
    const productReviewDate = new Date();
    const reviewInfo = [productReview, productReviewDate];

    if (localStorage.hasOwnProperty(productName)) {
        let reviewsArray = JSON.parse(localStorage.getItem(productName));
        
        reviewsArray.push(reviewInfo);
        localStorage.setItem(productName, JSON.stringify(reviewsArray));
        alert('Ваш отзыв добавлен')
    }
    else{
        let reviewsArray = [reviewInfo];
        localStorage.setItem(productName, JSON.stringify(reviewsArray));
        alert('Ваш отзыв добавлен')
    }

    productNameTextarea.value = '';
    productReviewTextarea.value = '';
    
})