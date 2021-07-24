/* 
Count all possible combinations of the TWO elements one from array A1 and one from array A2, 
such that they add up to a specific target T.

A1, A2 is array of integer. Each elements of those array are unique.

* there might be test cases other than shown below, so plan ahead your code *
Test Case #1:
    Input:
        A1 = [2, 4, 7, 15], 
        A2 = [6, 2, 4, 9, 0, 1, 3, 7],
        T = 9
    Result:
        count : 2
    Explanation : 
        - A1[0] + A2[7]
        - A1[2] + A2[1]

Test Case #2:
    Input:
        A1 = [-1, 0, 5, 9, 2, 7, 4, 1, -2, 8],
        A2 = [9, -5, 1, 0, 8, 2, -3, 4, 5, 3],
        T = 7
    Result:
        count : 6
    Explanation :
        - A1[0] + A2[4]
        - A1[2] + A2[5]
        - A1[4] + A2[8]
        - A1[5] + A2[3]
        - A1[6] + A2[8]
        - A1[8] + A2[0]
*/
function TwoCombinationToTarget(arr1,arr2, t){
  let count = 0 
  // for (let i=0; i<arr1.length;i++){
  //   for (let j=0; j<arr2.length;j++){
  //     if (arr1[i]+arr2[j]==t) {
  //       count++;
  //     }
  //   }
  // }
  let map1 = new Map()
  let map2 = new Map()
  for (let i=0; i<arr1.length;i++){
    map1.set(arr1[i],0)
  }
  for (let i=0; i<arr2.length;i++){
    if (map1.has(t-arr2[i])){
      count++
    } 
  }
  return count
}

var A1 = [-1, 0, 5, 9, 2, 7, 4, 1, -2, 8]
var A2 =  [9, -5, 1, 0, 8, 2, -3, 4, 5, 3]
var target = 7
console.log("Count ",TwoCombinationToTarget(A1,A2,target))