function forLoop(array){
  for (let i = 0; i < 25; i++){
    
    if(i === 1 ){
      array.unshift('I am 1 strange loop.');
    }
    
    else{
      array.unshift('I am ${i} strange loops.');
    }
   
  }
   return array;
}

let n = 
function whileLoop(n){
  while (n > 5){
     console.log(--n);
       if (n === 0){
         
      return 'done';
      
    }
    
  }
}