var count = 0; var num = 0; var max = 0 ; var min  = 1000;

for (count = 1; count <= 5; count++) {

    num = Math.floor(Math.random() * 900 + 100);
    console.log(num)

    if (num > max){
      max = num;
    }
    if (num < min){
      min = num
    }    
}  
console.log("max: " + max)
console.log("min: " + min)
