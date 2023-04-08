(() => {

  let myDynamicVar: any;
  myDynamicVar = 12;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = [];
  myDynamicVar = 'pog';

  myDynamicVar = 'Hello';

  // myDynamicVar be treated as string
  const rta = (myDynamicVar as string).toLowerCase();
  console.log(rta);

  myDynamicVar = 1231;

  // myDynamicVar be treated as number
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log(rta2)

})();