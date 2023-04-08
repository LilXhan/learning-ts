(() => {
  // let myNumber: number; 
  // let myString: string; 

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 10;

  let myString: string | undefined = undefined;
  myString = 'Hello';

  function hi(name: string | null) {
    let hello = 'Hello ';
    if (typeof name === 'string') {
      hello += name;
    } else {
      hello += 'nobody'
    }
    return hello;
  }

  function hiV2(name: string | null) {
    let hello = 'Hello ';
    hello += name?.toLowerCase() || 'nobody';
    return hello;
  }

  console.log(hiV2(null));
  console.log(hiV2('Flavio'))
})();



