console.log("-----------------------------------------")
const numbers = [5,0,9,1,7,4,2,6,3,8];

(function bubbleSort(arr){

      for(var i = 0; i < arr.length; i++) {
        for(var j = 0; j < ( arr.length - i -1 ); j++) {
            if(arr[j] < arr[j+1]) {
                var tempVal = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = tempVal
            }
      }
    }
    
    console.log("Descending order ", arr);

})(numbers)

console.log(numbers.toString())
console.log(numbers.join("-"))

