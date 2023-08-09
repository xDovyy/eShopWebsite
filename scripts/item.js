const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')
let htmlCode = '';
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        const res = JSON.parse(xhr.responseText);
        console.log(res);
        const itemCards = document.querySelector(".main-item");
        itemCards.innerHTML = htmlCode;
    }
};
xhr.open('GET', 'http://localhost:8080/items/05633451-84ae-444d-aff8-f27511b10406', true);
xhr.setRequestHeader('Accept', 'application/json');
xhr.send(null);