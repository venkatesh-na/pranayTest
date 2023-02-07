let carts = [];

//get cart from localstorage and store it in carts
let localCartData = localStorage.getItem("cart")
if(localCartData){
    localCartData = JSON.parse(localCartData)
    carts = localCartData
}

//get url
// const url = location.href

const items = document.querySelector(".items");
// let paramaters = (new URL(url)).searchParams;

//fetch id from url
// var id = paramaters.get("id");
var id = localStorage.getItem("id")
localStorage.setItem("id","")

if(id){
    function isProductExists(id){
        console.log(carts.findIndex(c=>c.id == id)) 
        if(carts.findIndex(c=>c.id == id) != -1){
            return true;
        } else {
            return false;
    }
    }

    var filteredData = {...data.filter(d=>d.id == id)[0],count : 1}
    if(!isProductExists(id)){
        carts.push(filteredData);
    } else {
        carts = carts.map(c=>{
            const {count } = c
            if(c.id == id){
                return {...c,count : count + 1}
            } else return c
        })
    }



    //add cart data to localstorage
    localStorage.setItem("cart",JSON.stringify(carts))
}

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
        <div class="amount">&#x20B9;${price}</div>
        <div class="remove"><i class="fa fa-trash-o"></i></div>
    </div>
</div>
`
}).join("")

const AllRemoveBtn = document.querySelectorAll(".remove")
AllRemoveBtn.forEach(btn=>{
    btn.addEventListener("click",(e)=>{
        const ParentElement = e.target.parentElement.parentElement.parentElement;
        const id = ParentElement.id;
        ParentElement.remove()
        carts = carts.filter(c=>c.id != id)
        localStorage.setItem("cart",JSON.stringify(carts))
        
    })
})


