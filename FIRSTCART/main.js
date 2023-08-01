let products = document.getElementById('products');



let basket = JSON.parse(localStorage.getItem("data")) || [] //if we have local data, it will retrieve it, if we dont have it, it will be an empty array

let generateProducts = ()=>{ 
    return (products.innerHTML = productItemsData.map((x)=>{
        let {id, name, price, desc, img} = x;
        let search = basket.find((x) => x.id === id) || [] //once i add to cart, and i refresh, let the quantity in the button go back to zero instead of starting from where i sttopped. in summary, if i find something store it, if i dont, let it empty
        return `
        <div class="item" id="item">
            <img src=${img} alt="" class="item-img">
            <div class="item-details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity"> 
                    <h2>$ ${price}</h2> 
                    <div class="buttons">
                        <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
                        <div id=${id} class="quantity">${search.item === undefined? 0: search.item}</div> 
                        <i onclick="increment(${id})" class="fa-solid fa-plus"></i> 
                    </div>
                </div>
            </div> 
        </div>
        `;
    }).join(""));
};
generateProducts() 

let increment = (id) => {
    let selectedItem = id  
    let search = basket.find((x) => x.id === selectedItem.id);

    if(search === undefined){
        basket.push({
            id:selectedItem.id,
            item: 1,
        });
    }
   else{
        search.item += 1;
   } 
   
   update(selectedItem.id)

   localStorage.setItem('data', JSON.stringify(basket)) //you an use any name in the set item
  
    // console.log(basket);
    
};

let decrement = (id) => {
    let selectedItem = id  
    let search = basket.find((x) => x.id === selectedItem.id);

    if(search === undefined) return
    else if(search.item === 0) return ;
    
    else{
            search.item -= 1;
    }

    update(selectedItem.id)
    basket = basket.filter((x)=> x.item !==0)
    
    // console.log(basket);
    localStorage.setItem('data', JSON.stringify(basket)) //you an use any name in the set item
    
}; 

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    // console.log(search.item)
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

let calculation = ()=>{
    let cartIcon =  document.getElementById("cartAmount")
    cartIcon.innerHTML = (basket.map((x) => x.item).reduce((x,y)=> x + y,0)); //reduce was used to add all the cart number together and let it show on the cart icon
    
};
calculation();
