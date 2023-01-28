const cart = [];
const url = location.href
console.log(url)

const items = document.querySelector(".items");
let paramaters = (new URL(url)).searchParams;
var id = paramaters.get("id");
console.log(id)
var filteredData = data.filter(d=>d.id == id)

items.innerHTML = filteredData.map(data=>{
    const {  id, src, name, rating, price, description } = data;
    return `
    <div class="Cart-Items">
        <div class="image-box">
            <img src=${src} style={{ height=”120px” }} />
        </div>
        <div class="about">
            <h1 class="title">${name}</h1>
            <p>Rating : ${rating}</p>
        </div>
        <div class="counter">
            <div class="btn">+</div>
            <div class="count">2</div>
            <div class="btn">-</div>
        </div>
        <div class="prices">
            <div class="amount">${price}</div>
            <div class="save"><u>Save for later</u></div>
            <div class="remove"><u>Remove</u></div>
        </div>
    </div>
    `
})

