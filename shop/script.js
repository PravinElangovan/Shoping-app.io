const product = [];
const mens = [];
const womens = [];
const jewelery = [];
const electronics = [];
const ratings = [];
const mensSection = document.getElementById('mens-section');
const womenSection = document.getElementById('womens-section');
const filterAll = document.getElementById('all');
const filterMens=document.getElementById('mens');
const filterWomens= document.getElementById('womens');
const filterJewells = document.getElementById('jewells');
const filterElectronics = document.getElementById('electronics');
const currentUser = sessionStorage.getItem('username');
console.log(currentUser)
console.log(filterAll);
console.log(filterMens);
console.log(filterWomens);
console.log(filterJewells);
console.log(filterElectronics);
console.log(currentUser)
var search = document.getElementById('search');

let cart = [];
function addEventListenersToButtons(callback) {
  cart=JSON.parse(localStorage.getItem(currentUser)) ||[];
  const addButtons = document.querySelectorAll('#all-items button');
  addButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const item = product[index];
      cart.push(item);
      console.log('Item added to cart:', item);
      callback();
    });
  });
}




// Make a GET request to the API endpoint
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    product.push(...data);
    console.log(data);
    console.log(product);



    product.filter((product) => {

      if(product.category === "men's clothing"){
        mens.push(product);
      }
    })
    product.filter((product) => {

      if(product.category ===  "women's clothing"){
        womens.push(product);
      }
    })
    product.filter((product) => {

      if(product.category === "jewelery"){
        jewelery.push(product);
      }
    })
    product.filter((product) => {

      if(product.category === "electronics"){
        electronics.push(product);
      }
    })
    product.map((product)=>{
      ratings.push(Math.round(product.rating.rate));
     })
    
     
    console.log(ratings);
    console.log(mens)
    console.log(womens)
    console.log(jewelery)

    console.log(electronics)
    // Call the map function on the product array after it's populated with the API response data
    
    product.map((product)=>{
      document.getElementById('all-items').innerHTML += `
    
    <div class="item">
              <img src="${product.image}" alt="Item" />
              <div class="info">
                <div class="row">
                  <div class="price">$ ${product.price}</div>
                  <div class="sized">S,M,L</div>
                </div>
                <div class="colors">
                  Colors:
                  <div class="row">
                    <div class="circle" style="background-color: #000"></div>
                    <div class="circle" style="background-color: #4938af"></div>
                    <div class="circle" style="background-color: #203d3e"></div>
                  </div>
                </div>
                <div class="row">Rating: ${product.rating.rate}</div>
              </div>
              <button id="addBtn">Add to Cart</button>
        </div>`
    })
    // mens.map((product)=>{console.log("men's -- >" + product.price)
    //   document.getElementById('mens-item').innerHTML += `
    
    // <div class="item">
    //           <img src="${product.image}" alt="Item" />
    //           <div class="info">
    //             <div class="row">
    //               <div class="price">$ ${product.price}</div>
    //               <div class="sized">S,M,L</div>
    //             </div>
    //             <div class="colors">
    //               Colors:
    //               <div class="row">
    //                 <div class="circle" style="background-color: #000"></div>
    //                 <div class="circle" style="background-color: #4938af"></div>
    //                 <div class="circle" style="background-color: #203d3e"></div>
    //               </div>
    //             </div>
    //             <div class="row">Rating: ${product.rating.rate}</div>
    //           </div>
    //           <button id="addBtn">Add to Cart</button>
    //     </div>`
    // })
    // womens.map((product)=>{
    //   document.getElementById('womens-item').innerHTML += `
    
    // <div class="item">
    //           <img src="${product.image}" alt="Item" />
    //           <div class="info">
    //             <div class="row">
    //               <div class="price">$ ${product.price}</div>
    //               <div class="sized">S,M,L</div>
    //             </div>
    //             <div class="colors">
    //               Colors:
    //               <div class="row">
    //                 <div class="circle" style="background-color: #000"></div>
    //                 <div class="circle" style="background-color: #4938af"></div>
    //                 <div class="circle" style="background-color: #203d3e"></div>
    //               </div>
    //             </div>
    //             <div class="row">Rating: ${product.rating.rate}</div>
    //           </div>
    //           <button id="addBtn">Add to Cart</button>
    //     </div>`
    // })
    addEventListenersToButtons(function(){

      localStorage.setItem(currentUser, JSON.stringify(cart));
      sessionStorage.setItem(currentUser, JSON.stringify(cart))
    })
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

 // Filter products by category and update the DOM
function filterProducts(category) {
  // Clear the previous items
  document.getElementById('all-items').innerHTML = '';
  
  // Select the appropriate array based on the selected category
  const selectedArray = category === 'mens' ? mens :
                        category === 'womens' ? womens :
                        category === 'jewels' ? jewelery :
                        category === 'electronics' ? electronics :
                        product;
  
  // Loop through the selected array and add the items to the DOM
  selectedArray.map((product) => {
    document.getElementById('all-items').innerHTML += `
      <div class="item">
        <img src="${product.image}" alt="Item" />
        <div class="info">
          <div class="row">
            <div class="price">$ ${product.price}</div>
            <div class="sized">S,M,L</div>
          </div>
          <div class="colors">
            Colors:
            <div class="row">
              <div class="circle" style="background-color: #000"></div>
              <div class="circle" style="background-color: #4938af"></div>
              <div class="circle" style="background-color: #203d3e"></div>
            </div>
          </div>
          <div class="row">Rating: ${product.rating.rate}</div>
        </div>
        <button id="addBtn">Add to Cart</button>
      </div>`;
  });
  addEventListenersToButtons(function(){

    localStorage.setItem(currentUser, JSON.stringify(cart));
    sessionStorage.setItem(currentUser, JSON.stringify(cart))
  })
}

// Event listeners for the filter buttons
filterAll.addEventListener('click', () => {
  filterProducts('all');
  filterAll.classList.add("active")
  filterMens.classList.remove("active")
  filterElectronics.classList.remove("active");
  filterWomens.classList.remove("active");
  filterJewells.classList.remove("active");
});

filterMens.addEventListener('click', () => {
  filterProducts('mens');
  filterAll.classList.remove("active");
  filterMens.classList.add("active")
  filterElectronics.classList.remove("active");
  filterWomens.classList.remove("active");
  filterJewells.classList.remove("active");
  
});

filterWomens.addEventListener('click', () => {
  filterProducts('womens');
  filterWomens.classList.add("active")
  filterAll.classList.remove("active");
  filterElectronics.classList.remove("active");
  filterMens.classList.remove("active");
  filterJewells.classList.remove("active");
});

filterJewells.addEventListener('click', () => {
  filterProducts('jewels');
  filterJewells.classList.add("active")
  filterAll.classList.remove("active");
  filterElectronics.classList.remove("active");
  filterMens.classList.remove("active");
  filterWomens.classList.remove("active");
});

filterElectronics.addEventListener('click', () => {
  filterProducts('electronics');
  filterElectronics.classList.add("active")
  filterAll.classList.remove("active");
  filterWomens.classList.remove("active");
  filterMens.classList.remove("active");
  filterJewells.classList.remove("active");
});
console.log(cart)

document.getElementById('range').addEventListener('input',(event)=>{
  console.log(event.target.value);
  const rating = event.target.value;
  const filteredProducts = product.filter(product => {
    return product.rating.rate >= rating;
  });
  
  // Clear existing items
  document.getElementById('all-items').innerHTML = '';
  
  // Add filtered products
  filteredProducts.map((product) => {
    document.getElementById('all-items').innerHTML += `
      <div class="item">
        <img src="${product.image}" alt="Item" />
        <div class="info">
          <div class="row">
            <div class="price">$ ${product.price}</div>
            <div class="sized">S,M,L</div>
          </div>
          <div class="colors">
            Colors:
            <div class="row">
              <div class="circle" style="background-color: #000"></div>
              <div class="circle" style="background-color: #4938af"></div>
              <div class="circle" style="background-color: #203d3e"></div>
            </div>
          </div>
          <div class="row">Rating: ${product.rating.rate}</div>
        </div>
        <button id="addBtn">Add to Cart</button>
      </div>`;
      addEventListenersToButtons(function(){

        localStorage.setItem(currentUser, JSON.stringify(cart));
        sessionStorage.setItem(currentUser, JSON.stringify(cart))
      })
  });
})

function filterProductByPriceRange(products,minPrice,maxPrice){
  return products.filter(product => product.price >= minPrice && product.price <= maxPrice);
}
let filteredProductPriceWise = [];
document.getElementById('0-25').addEventListener('click',()=>{
 filteredProductPriceWise = filterProductByPriceRange(product,0,25);

 document.getElementById('all-items').innerHTML = '';
  
  // Add filtered products
  filteredProductPriceWise.map((product) => {
    document.getElementById('all-items').innerHTML += `
      <div class="item">
        <img src="${product.image}" alt="Item" />
        <div class="info">
          <div class="row">
            <div class="price">$ ${product.price}</div>
            <div class="sized">S,M,L</div>
          </div>
          <div class="colors">
            Colors:
            <div class="row">
              <div class="circle" style="background-color: #000"></div>
              <div class="circle" style="background-color: #4938af"></div>
              <div class="circle" style="background-color: #203d3e"></div>
            </div>
          </div>
          <div class="row">Rating: ${product.rating.rate}</div>
        </div>
        <button id="addBtn">Add to Cart</button>
      </div>`;
  });

  addEventListenersToButtons(function(){

    localStorage.setItem(currentUser, JSON.stringify(cart));
    sessionStorage.setItem(currentUser, JSON.stringify(cart))
  })
})
document.getElementById('25-50').addEventListener('click',()=>{
  filteredProductPriceWise = [];
  filteredProductPriceWise = filterProductByPriceRange(product,25,50);
  document.getElementById('all-items').innerHTML = '';
  
  // Add filtered products
  filteredProductPriceWise.map((product) => {
    document.getElementById('all-items').innerHTML += `
      <div class="item">
        <img src="${product.image}" alt="Item" />
        <div class="info">
          <div class="row">
            <div class="price">$ ${product.price}</div>
            <div class="sized">S,M,L</div>
          </div>
          <div class="colors">
            Colors:
            <div class="row">
              <div class="circle" style="background-color: #000"></div>
              <div class="circle" style="background-color: #4938af"></div>
              <div class="circle" style="background-color: #203d3e"></div>
            </div>
          </div>
          <div class="row">Rating: ${product.rating.rate}</div>
        </div>
        <button id="addBtn">Add to Cart</button>
      </div>`;
      addEventListenersToButtons(function(){

        localStorage.setItem(currentUser, JSON.stringify(cart));
        sessionStorage.setItem(currentUser, JSON.stringify(cart))
      })
  });
})
document.getElementById('50-100').addEventListener('click',()=>{
  filteredProductPriceWise = [];
  filteredProductPriceWise = filterProductByPriceRange(product,50,100);
  document.getElementById('all-items').innerHTML = '';
  
  // Add filtered products
  filteredProductPriceWise.map((product) => {
    document.getElementById('all-items').innerHTML += `
      <div class="item">
        <img src="${product.image}" alt="Item" />
        <div class="info">
          <div class="row">
            <div class="price">$ ${product.price}</div>
            <div class="sized">S,M,L</div>
          </div>
          <div class="colors">
            Colors:
            <div class="row">
              <div class="circle" style="background-color: #000"></div>
              <div class="circle" style="background-color: #4938af"></div>
              <div class="circle" style="background-color: #203d3e"></div>
            </div>
          </div>
          <div class="row">Rating: ${product.rating.rate}</div>
        </div>
        <button id="addBtn">Add to Cart</button>
      </div>`;
      addEventListenersToButtons(function(){

        localStorage.setItem(currentUser, JSON.stringify(cart));
        sessionStorage.setItem(currentUser, JSON.stringify(cart))
      })
  });
})
document.getElementById('100on').addEventListener('click',()=>{
  filteredProductPriceWise = [];
  filteredProductPriceWise = filterProductByPriceRange(product,100,1000);
  document.getElementById('all-items').innerHTML = '';
  
  // Add filtered products
  filteredProductPriceWise.map((product) => {
    document.getElementById('all-items').innerHTML += `
      <div class="item">
        <img src="${product.image}" alt="Item" />
        <div class="info">
          <div class="row">
            <div class="price">$ ${product.price}</div>
            <div class="sized">S,M,L</div>
          </div>
          <div class="colors">
            Colors:
            <div class="row">
              <div class="circle" style="background-color: #000"></div>
              <div class="circle" style="background-color: #4938af"></div>
              <div class="circle" style="background-color: #203d3e"></div>
            </div>
          </div>
          <div class="row">Rating: ${product.rating.rate}</div>
        </div>
        <button id="addBtn">Add to Cart</button>
      </div>`;
      addEventListenersToButtons(function(){

        localStorage.setItem(currentUser, JSON.stringify(cart));
        sessionStorage.setItem(currentUser, JSON.stringify(cart))
      })
  });



})

function filterBySearch(products, searchTerm) {
  // Filter the products array based on the searchTerm
  const filteredProducts = products.filter(product => {
    // Convert both the product name and the search term to lowercase
    const productName = product.title.toLowerCase();
    const searchTermLower = searchTerm.toLowerCase();

    // Return true if the product name includes the search term
    return productName.includes(searchTermLower);
  });

  // Return the filtered products array
  return filteredProducts;
}
search.addEventListener('input', () => {
  // Clear the existing products
  document.getElementById('all-items').innerHTML = '';

  // Filter the products based on the search term
  const searchFilter = filterBySearch(product, search.value);
  console.log(searchFilter);

  // Append the filtered products to the all-items element
  searchFilter.forEach((product) => {
    document.getElementById('all-items').innerHTML += `
      <div class="item">
        <img src="${product.image}" alt="Item" />
        <div class="info">
          <div class="row">
            <div class="price">$ ${product.price}</div>
            <div class="sized">S,M,L</div>
          </div>
          <div class="colors">
            Colors:
            <div class="row">
              <div class="circle" style="background-color: #000"></div>
              <div class="circle" style="background-color: #4938af"></div>
              <div class="circle" style="background-color: #203d3e"></div>
            </div>
          </div>
          <div class="row">Rating: ${product.rating.rate}</div>
        </div>
        <button id="addBtn">Add to Cart</button>
      </div>`;
      
    // Add event listeners to the buttons for the newly appended products
    addEventListenersToButtons(() => {
      localStorage.setItem(currentUser, JSON.stringify(cart));
      sessionStorage.setItem(currentUser, JSON.stringify(cart))
    });
  });
});












