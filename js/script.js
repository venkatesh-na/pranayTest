let preveiwContainer = document.querySelector('.products-preview');

let productContainer = document.querySelector('.products-container');

productContainer.innerHTML=data.map((product)=>{
  const { id, src, name, rating, price, description } = product 
  return `<div class="product" data-name="${id}">
           <img src="${src}" alt="">
           <h3>${name}</h3>
           <div class="price">₹${price}/-</div>
        </div>`
  })

  preveiwContainer.innerHTML=data.map((product)=>{
    const { id, src, name, rating, price, description} = product
    return `<div class="preview" data-target="${id}">
    <i class="fas fa-times"></i>
    <img src="${src}" alt="">
    <h3>${name}</h3>
    <div class="stars">
       <i class="fas fa-star"></i>
       <i class="fas fa-star"></i>
       <i class="fas fa-star"></i>
       <i class="fas fa-star"></i>
       <i class="fas fa-star-half-alt"></i>
       <span>( 250 )</span>
    </div>
    <p> ${description}</p>
    <div class="price">₹${price}/-</div>
    <div class="buttons">
       <a href="#" class="buy">buy now</a>
       <a href="Cart.html?id=${id}" class="cart">add to cart</a>
    </div>
 </div>`
  })
let previewBox = preveiwContainer.querySelectorAll('.preview');
document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    console.log(name);
    console.log(previewBox);
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      console.log(target);
      if(name == target){
        console.log(name,target)
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});