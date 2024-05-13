
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => getData(json))
    .catch(error => console.log("Ошибка выполнения"));


  function getData(json) {
    const container = document.querySelector('.container');
    const template = document.querySelector('.user-template');
    const templateContent = template.content;

    json.forEach(userData => {
        const newUser = templateContent.cloneNode(true);

        const nameElement = newUser.getElementById('name');
        const usernameElement = newUser.getElementById('username');
        const emailElement = newUser.getElementById('email');
        const streetElement = newUser.getElementById('street');
        const suiteElement = newUser.getElementById('suite');
        const cityElement = newUser.getElementById('city');
        const zipcodeElement = newUser.getElementById('zipcode');
        const geoElement = newUser.getElementById('geo');
        const phoneElement = newUser.getElementById('phone');
        const websiteElement = newUser.getElementById('website');
        const companyNameElement = newUser.getElementById('company-name');
        const catchPhraseElement = newUser.getElementById('catch-phrase');
        const bsElement = newUser.getElementById('bs');
        const button = newUser.getElementById('custom-button');
        const userInfo = newUser.querySelector('.user-info');

        nameElement.textContent = userData.name;
        usernameElement.textContent = userData.username;
        emailElement.textContent = userData.email;
        streetElement.textContent = userData.address.street;
        suiteElement.textContent = userData.address.suite;
        cityElement.textContent = userData.address.city;
        zipcodeElement.textContent = userData.address.zipcode;
        geoElement.textContent = `${userData.address.geo.lat}, ${userData.address.geo.lng}`;
        phoneElement.textContent = userData.phone;
        websiteElement.textContent = userData.website;
        companyNameElement.textContent = userData.company.name;
        catchPhraseElement.textContent = userData.company.catchPhrase;
        bsElement.textContent = userData.company.bs;
        
        container.appendChild(newUser);
        localStorage.setItem(`user_${userData.id}`, JSON.stringify(userData));

        button.addEventListener('click', function() {
            userInfo.remove();
            localStorage.removeItem(`user_${userData.id}`);
        })


    });

  }
