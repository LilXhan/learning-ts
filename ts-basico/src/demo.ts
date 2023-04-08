interface Category {
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

interface Product {
  title: string;
  description: string;
  price: number;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: Category;
}

(async () => {
  const myCart = [];
  const products: Product[] = [];
  const limit = 2;

  async function getProducts() {
    const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
      method: 'GET'
    });
    const data = await rta.json();
    products.concat(data);
  }
  
  function getTotal() {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i].price;
    }
    return total;
  }
  function addProduct(index: number) {
    if (getTotal() <= limit) {
      myCart.push(products[index]);
    }
  }
  await getProducts();
  addProduct(1);
  addProduct(2);
  const total = getTotal();
  console.log(total);
  const person = {
    name: 'Flavio',
    lastname: 'Alvarado'
  }
  const rta = person;
  console.log(rta);
});