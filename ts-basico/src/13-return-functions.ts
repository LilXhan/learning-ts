(() => {
  const calcTotal = (prices: number[]): string => {
    return prices.reduce((a, b) => a += b).toString();
  };

  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
  };

  printTotal([1, 2, 3, 4]);
})();