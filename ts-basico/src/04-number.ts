(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log('product price', productPrice);

  let customerAge: number = 28;
  customerAge = customerAge + 1;
  console.log('customer age', customerAge);

  let productInStock: number;
  console.log('product in stock', productInStock);

  if (productInStock > 10) {
    console.log('is greater');
  };

  let discount = Number('200');
  console.log('discount', discount);

  if (discount <= 200) {
    console.log('apply');
  } else {
    console.log('not apply');
  }

  let hex = 0xfff;
  console.log('hex', hex);

  let bin = 0b1010;
  console.log('binary', bin);

  const myNumber: number = 10;
})();