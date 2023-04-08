(() => {
  let userId: string | number;
  userId = 102313;
  userId = 'ObjectId3213123';

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string: ${myText.toLowerCase()}`);
    } else {
      console.log(`number: ${myText.toFixed(1)}`);
    }
  }

  greeting('Nicolas');
  greeting(12313.5555555555);
})();