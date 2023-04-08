import { addProduct, calcStock, products } from './product.service';

addProduct({
  title: 'Pro1',
  createAt: new Date(),
  stock: 5
})

addProduct({
  title: 'Pro2',
  createAt: new Date(),
  stock: 10
});

const result = calcStock();

console.log(products);
console.log(result);