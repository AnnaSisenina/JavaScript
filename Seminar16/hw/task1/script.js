
function getData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => {
      const container = document.querySelector(".container");
      const templateSource = document.getElementById("user-template").innerHTML;
      const template = Handlebars.compile(templateSource);
      
      json.forEach(userData => {
        const html = template(userData);
        const newElement = document.createElement('div');
        newElement.innerHTML = html;
        const userInfoElement = container.insertAdjacentElement('beforeend', newElement);
        
        localStorage.setItem(`user_${userData.id}`, JSON.stringify(userData));

        const userInfo = newElement.querySelector('.user-info');
        const button = userInfo.querySelector('button');

        button.addEventListener('click', function() {
            userInfo.remove();
            localStorage.removeItem(`user_${userData.id}`);
        })
      });
    })
    .catch(error => console.log("Ошибка выполнения"));
}

getData();