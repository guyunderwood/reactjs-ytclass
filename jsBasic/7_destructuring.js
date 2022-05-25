// Destructuring

//Array

const colors = ["Red", "Green", "Blue"];

const [r, g, b] = colors;
console.log(r);
console.log(g);
console.log(b);

//want only blue

const [, , blue] = colors;
console.log(blue);

// obj

const product = {
  productName: "Computer",
  price: 3000,
  stock: 10,
};

const { productName: pdn, price: p, stock: s } = product; // lt = name of properties from obj, rt = const name

console.log(pdn);
console.log(p);
console.log(s);

const { productName, price, stock } = product; // or this way
console.log(productName);
console.log(stock);
