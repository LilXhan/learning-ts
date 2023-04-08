(() => {
  let prices = [50, 30, 20, 10, 100];
  /*
  Errors:
  prices.push('dsad');
  prices.push(true),
  prices.push({});
  */

  prices.push(123);
  prices = [1, 2, 3, 4, 5];

  let products = ['hola', true];
  products.push(false);
  products.push('hello');

  let mixed: (string | boolean | number)[] = ['hola', true];
  mixed.push(123);


  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  numbers.map(item => item * 2);

})();