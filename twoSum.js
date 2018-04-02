//function that will return all the pairs
//in the array that will sum up to given Sum
//Runtime : O(n)

function twoSum(arr, sum){
  var sums = [];
  var hashtable = {};

  for (var i = 0; i < arr.length, i++) {
    var sumMinusElement =  sum - arr[i];
    if (hastable[sumMinusElement.toString()] !== undefined) {
        sums.push([sumMinusElement, arr[i]);

        //for the problem where the indices are needed
        //sums.push(i, arr.indexOf(sumMinusElement));
    }
    //add the current element to the hashtable
    hashtable[arr[i].toString] = arr[i];
  }
  return sums;
}
