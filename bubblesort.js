var bubbleSort = function(array){
  // let x = 0;
  for (var i = 0; i < array.length - 1; i++){
    for (var j = 0; j < array.length-i-1; j++){
      if(comparator(array[j], array[j+1])){
        swap(array, j, j+1);
        // x +=1;

      }
    }
  }
  // console.log(x);
  return array;
};

var swap = function(array, num1, num2){
  var temp = array[num1];
  array[num1] = array[num2];
  array[num2] = temp;
  return array;
}

var comparator = function (a, b) {
  if (a > b) return 1;
  if (a <= b) return 0;
}
