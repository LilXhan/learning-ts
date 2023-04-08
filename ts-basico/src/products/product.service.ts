import { Product } from './product.model';

  
export const products: Product[] = [];

export const addProduct = (data: Product) => {
  products.push(data);
}

export const calcStock = (): number => {
  const stock = products.map(product => product.stock).reduce((a, b) => a += b);
  return stock;
}

