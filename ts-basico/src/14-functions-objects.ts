(() => {

  const login = (data: {email: string, password: string}) => {
    console.log({
      email: data.email,
      password: data.password
    });
  }

  login({
    email: 'example@gmail.com',
    password: 'secret123'
  })

  type Size = 'M' | 'S' | 'L' | 'XL'

  const products: any = [];

  const addProduct = (data: {
    title: string,
    createAt: Date,
    stock: number,
    size?: Size
  }) => {
    products.push(data);
  }

  addProduct({
    title: 'Prod1',
    createAt: new Date(),
    stock: 12,
    size: 'XL'
  });

  console.log(products);

})();