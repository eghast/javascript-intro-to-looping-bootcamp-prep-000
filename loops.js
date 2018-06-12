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

let n = 100
function whileLoop(n){
  
  while (n > 0){
     console.log(--n);
     
       if (n === 0){
         
      return 'done';
      
    }
    
  }
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(array){
  do{
    array.slice(0, array.length - 1)){
    }
    return array;
  }
  while(array.length > 0 && maybeTrue());
}