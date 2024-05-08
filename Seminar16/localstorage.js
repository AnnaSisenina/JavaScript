const data = localStorage.setItem('myData', 'Something');
const data1 = localStorage.getItem('myData');

console.log(data1);

// localStorage.removeItem('myData');
// localStorage.clear();

console.log(localStorage.key(0));

localStorage.user = {
    name: 'John'
}

console.log(localStorage.user);
localStorage.user = JSON.stringify({
    name: 'John'
});

console.log(localStorage.user);