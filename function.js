// products array of objects
const products = [
  { id: 1, name: 'Laptop', price: 1500, isStock: false },
  { id: 2, name: 'Tshirt', price: 200, isStock: true },
  { id: 3, name: 'Pants', price: 150, isStock: true },
  { id: 4, name: 'Brief', price: 50, isStock: true },
  { id: 5, name: 'Bag', price: 500, isStock: false },
];

// looking available products
const productAvail = products.filter((product) => product.isStock === true);

// display if the available products
// hindi pwede kumuha dito ng variable na showProduct tapos papasa mo sa find() kasi naka string to so kuha ka sa filter() nalang ng variable
const showProduct = productAvail.map(
  (showProduct) => `Name: ${showProduct.name} <br/> Price: ${showProduct.price}`
);

document.querySelector('#function1').innerHTML = showProduct.join('<br/>');

// display selected products
const productBuy = productAvail.find((buy) => buy.name === 'Tshirt');

document.querySelector(
  '#function2'
).innerHTML = `Name: ${productBuy.name} Price: ${productBuy.price}`;

// show the total price of selected products using setTimeout
setTimeout(() => {
  const totalProductPrice = productBuy.price;
  document.querySelector(
    '#function3'
  ).innerHTML = `Total: ${totalProductPrice}`;
}, 2000);

// recommendation add conditional to display total if theres no problem then else if have problem
