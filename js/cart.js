let carts = [];

//get cart from localstorage and store it in carts
let localCartData = localStorage.getItem("cart")
if(localCartData){
    localCartData = JSON.parse(localCartData)
    carts = localCartData
}

//get url
const url = location.href

const items = document.querySelector(".items");
let paramaters = (new URL(url)).searchParams;

//fetch id from url
var id = paramaters.get("id");

var filteredData = {...data.filter(d=>d.id == id)[0],count : 0}
carts.push(filteredData);

//add cart data to localstorage
localStorage.setItem("cart",JSON.stringify(carts))

items.innerHTML = carts.map(e=>{
    const {  id, src, name, rating, price, description, count } = e;
    return `<div id = "${id}" class="Cart-Items">
    <div class="image-box">
        <img src=${src} style={{ height=”120px” }} />
    </div>
    <div class="about">
        <h1 class="title">${name}</h1>
        <p>Rating : ${rating}</p>
    </div>
    <div class="counter">
        <div class="btn inc">+</div>
        <div class="count">${count}</div>
        <div class="btn dec">-</div>
    </div>
    <div class="prices">
        <div class="amount">${price}</div>
        <div class="save"><u>Save for later</u></div>
        <div class="remove"><u>Remove</u></div>
    </div>
</div>
`
}).join("")

