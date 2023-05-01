const product = [];
const mens = [];
const womens = [];
const jewelery = [];
const electronics = [];
const mensSection = document.getElementById('mens-section');
const womenSection = document.getElementById('womens-section');
const filterAll = document.getElementById('all');
const filterMens=document.getElementById('mens');
const filterWomens= document.getElementById('womens');
const filterJewells = document.getElementById('jewells');
const filterElectronics = document.getElementById('electronics');

console.log(filterAll);
console.log(filterMens);
console.log(filterWomens);
console.log(filterJewells);
console.log(filterElectronics);

const cart = [];
function addEventListenersToButtons() {
  const addButtons = document.querySelectorAll('#all-items button');
  addButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const item = product[index];
      cart.push(item);
      console.log('Item added to cart:', item);
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
    mens.map((product)=>{console.log("men's -- >" + product.price)
      document.getElementById('mens-item').innerHTML += `
    
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
    womens.map((product)=>{
      document.getElementById('womens-item').innerHTML += `
    
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
    addEventListenersToButtons()
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
}

// Event listeners for the filter buttons
filterAll.addEventListener('click', () => {
  filterProducts('all');
});

filterMens.addEventListener('click', () => {
  filterProducts('mens');
});

filterWomens.addEventListener('click', () => {
  filterProducts('womens');
});

filterJewells.addEventListener('click', () => {
  filterProducts('jewels');
});

filterElectronics.addEventListener('click', () => {
  filterProducts('electronics');
});







