/** @format */

const getData = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return data;
};

console.log(products[0]);
console.log("after");
const initialState = {
  carts: [],

  totalPrice: 0,
  totalItem: 0,
};

