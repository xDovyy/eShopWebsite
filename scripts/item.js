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
                    <span>${res.price}</span>
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
    }
};
xhr.open('GET', 'http://78.58.205.35:25565/items/' + id, true);
xhr.setRequestHeader('Accept', 'application/json');
xhr.send(null);