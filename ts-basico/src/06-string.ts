(() => {
  let productTitle = 'My amazing product';
  productTitle = 'My amazing product change';
  console.log('product title', productTitle);

  const productDescription = "I'm tired";
  console.log('productDescription', productDescription);

  let productPrice = 100;
  let isNew: boolean = true;

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: $/.${productPrice}
    isNew: ${isNew}
  `
  console.log(summary);

  const myString: string = '';
})();