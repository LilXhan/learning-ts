(() => {

  type UserId = string | number;

  let userId: UserId;

  // Literal Types 
  
  type Sizes = 'S' | 'M' | 'XL' | 'L';

  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'XL';
  shirtSize = 'L';
  shirtSize = 'S';
  // shirtSize = 'dsd' -> error
  
  function greeting(userId: UserId, size: Sizes) {
    if (typeof userId === 'string') {
      return userId.toLowerCase();
    }
  }

  greeting(1, 'L');
  greeting('1', 'M');
})();