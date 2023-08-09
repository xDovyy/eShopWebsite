let htmlCode = '';
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        const res = JSON.parse(xhr.responseText);
        console.log(res);
        res.forEach(singleItem =>{
            htmlCode =
                htmlCode +
                `
      <div class="col mb-5">
        <div class="card h-100">
          <!-- Product image-->
          <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="...">
          <!-- Product details-->
          <div class="card-body p-4">
            <div class="text-center">
              <!-- Product name-->
              <h5 class="fw-bolder">${singleItem.name}</h5>
              <!-- Product price-->
              <p>${singleItem.price}</p>
            </div>
          </div>
          <!-- Product actions-->
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="/item.html?id=${singleItem.id}">Add to cart</a></div>
          </div>
        </div>
      </div>
  `;
        })
        const itemCards = document.querySelector(".itemCards");
        itemCards.innerHTML = htmlCode;
    }
};
xhr.open('GET', 'http://78.58.205.35:25565/items', true);
xhr.setRequestHeader('Accept', 'application/json');
xhr.send(null);