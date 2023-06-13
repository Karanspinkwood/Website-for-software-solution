function sortArray(array) {
    return array.sort(function(a, b) {
      return a - b;
    });
  }
  
  function divisibles(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i] % 5 === 0) {
        sum += array[i];
      }
    }
    return sum;
  }
  
  function printArray(array) {
    for (var i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }
  
  var numbers = [5, 10, 15, 20, 25];
  var sortedArray = sortArray(numbers);
  var sumOfDivisibles = divisibles(numbers);
  
  console.log("Sorted Array:", sortedArray);
  console.log("Sum of Divisibles:", sumOfDivisibles);
  