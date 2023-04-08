(() => {
  
  type Size = 'M' | 'S' | 'L' | 'XL'

  type Product = {
    title: string,
    createAt: Date, 
    stock: number,
    size?: Size
  }
  
  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  }

  addProduct({
    title: 'Prod1',
    createAt: new Date(),
    stock: 12,
    size: 'XL'
  });


})();