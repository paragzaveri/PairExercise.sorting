var bubbleSort = function(array){
  for (var i = 0; i < array.length - 1; i++){
    for (var j = 0; j < array.length -i -1; j++){
      if(array[j] > array[j+1]){
        swap(array, j, j+1);
      }
    }
  }
  return array;
};

var swap = function(array, num1, num2){
  var temp = array[num1];
  array[num1] = array[num2];
  array[num2] = temp;
  return array;
}
