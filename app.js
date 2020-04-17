const divisible = (number) => {
   if (typeof number === 'number'){
    const newArr = []; 
    for (let i = 1; i <= number; i++) {
      if (i % 2  !== 0 && i % 3 !== 0 && i % 5  !== 0  ){
        newArr.push(i);
      }
      
      if (i % 2 === 0) {
        newArr.push('yu');      
        if (i % 5 === 0) {
          newArr[newArr.length - 1] = 'yu-oh';
        }
        
        if (i % 3 === 0)  {
          newArr[newArr.length - 1] = 'yu-gi';       
           if (i % 5 === 0) {
            newArr[newArr.length - 1] = 'yu-gi-oh';
          }
        }
      }
      
      if (i % 2 == 0 && i % 3 === 0) {    
      } else {
        if (i % 3 === 0) {
          newArr.push('gi');
            if (i % 5 === 0) {
            newArr[newArr.length - 1] = 'gi-oh';
          }
        }
      }
      
      if (i % 2 == 0 && i % 5 === 0) {    
      } else {
        if (i % 3 == 0 && i % 5 === 0){     
        } else{
          if (i % 5 === 0) {
            newArr.push('oh');
          } 
        }
      }
   }
    return newArr;
   }
 }
 divisible(100);

 divisible(10);