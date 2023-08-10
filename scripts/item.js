let category;
function getItem(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')
    let htmlCode = '';
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            const res = JSON.parse(xhr.responseText);
            console.log(res);
            htmlCode =
                htmlCode +
                `
            <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0"
                               src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg" alt="..."></div>
            <div className="col-md-6">
                <h1 className="display-5 fw-bolder">${res.name}</h1>
                <div className="fs-5 mb-5">
                    <span>${res.price}€</span>
                </div>
                <p className="lead">${res.description}</p>
                <div className="d-flex">
                    <input className="form-control text-center me-3" id="inputQuantity" type="num" placeholder="${res.quantity} available"
                           style="max-width: 3rem">
                        <button className="btn btn-outline-dark flex-shrink-0" type="button">
                            <i className="bi-cart-fill me-1"></i>
                            Add to cart
                        </button>
                </div>
            </div>
  `;
            const itemCards = document.querySelector(".main-item");
            itemCards.innerHTML = htmlCode;
            category = res.category;
        }
    };
    xhr.open('GET', 'http://78.58.205.35:25565/items/' + id, true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.send(null);
}

function getRelatableItems(){
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
<div className="col mb-5">
    <div className="card h-100">
        <!-- Product image-->
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="...">
            <!-- Product details-->
            <div className="card-body p-4">
                <div className="text-center">
                    <!-- Product name-->
                    <h5 className="fw-bolder">${singleItem.name}</h5>
                    <!-- Product price-->
                    <p>${singleItem.price}€</p>
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
            const itemCards = document.querySelector(".related-items");
            itemCards.innerHTML = htmlCode;
        }
    };
    xhr.open('GET', 'http://78.58.205.35:25565/items?category=' + category, true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.send(null);
}