(() => {

  type Sizes = 'M' | 'S' | 'L' | 'XL';

  function createProductToJson(title: string, createdAt: Date, stock: number, size: Sizes) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const product1 = createProductToJson('P1', new Date(), 20, 'M');
  console.log(product1);
  console.log(product1.size);
  console.log(product1.title);

  const createProductToJsonV2 = (title: string, createdAt: Date, stock: number, size?: Sizes) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const product1V2 = createProductToJsonV2('P1', new Date(), 20);
  console.log(product1V2);
  console.log(product1V2.size);
  console.log(product1V2.title);


})();