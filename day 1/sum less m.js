// Input:
//   arr: array of integers
//   m: a fixed integer
// Output:
//   print sum of odd element less than m, and sum of even element less than m
//



let arr = [1, 2, 3, 5, 6, 7, 101]
let m = 12, totalOdd = 0, totalEven = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] < m && arr[i] % 2 !== 0){
        totalOdd+=arr[i];
    }else if(arr[i] < m && arr[i] % 2 === 0){
        totalEven+=arr[i];
    }
}
console.log(totalOdd);
console.log(totalEven);