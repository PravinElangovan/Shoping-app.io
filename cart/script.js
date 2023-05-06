const checkoutData = document.getElementById('data');
var currentUser;
var cartData;
var getCart;

function getCartItems(callback) {
  currentUser = sessionStorage.getItem('username');
  getCart = localStorage.getItem(currentUser);
  console.log(currentUser)

  if (getCart) {
    cartData = JSON.parse(getCart);
    callback(cartData);
  } else {
    callback([]);
  }
}

function addEventListenersToButtons() {
  const removeBtns = document.querySelectorAll('.item button');
  removeBtns.forEach((button, index) => {
    button.addEventListener('click', () => {
      const item = cartData[index];
      console.log(item)
      cartData.splice(index, 1);
      console.log('button clicked');
      console.log('Item Deleted from the cart:', item);
      renderCartItems();
    });
  });
}

function renderCartItems() {
  document.getElementById('cart-items').innerHTML = '';
  cartData.forEach((product) => {
    document.getElementById('cart-items').innerHTML += `
      <div class="item">
        <img src="${product.image}" alt="Item" />
        <div class="info">
          <div class="row">
            <div class="price">$ ${product.price}</div>
            <div class="sized">S,M,L</div>
          </div>
          <div class="row">Rating: ${product.rating.rate}</div>
        </div>
        <button id="removeBtn">Remove Item</button>
      </div>
    `;
  });

  addEventListenersToButtons();
  console.log(cartData)
  cartData.map((product) => {
    const trimmedTitle = product.title.substring(0, 10);
    
    checkoutData.innerHTML += `
      <div class="check">
        <div class="title">${trimmedTitle}</div>
        <div class="price">$${product.price}</div>
      </div>
    `;
    
  });

  const total = cartData.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  document.getElementById('total').innerText = "$" + Math.round(total, 3);
  sessionStorage.setItem('Total', total);

  localStorage.setItem(currentUser, JSON.stringify(cartData));
}

getCartItems(function(cartData) {
  console.log('cart data:', cartData);
  renderCartItems();
  
  // Empty cart on checkout button click
  document.getElementById('checkout-btn').addEventListener('click', () => {
    window.location.href = "../razorpay/index.html";
  });
});
