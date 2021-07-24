
// Dynamic Programming Javascript implementation
// of LIS problem

// lis() returns the length of the longest
// increasing subsequence in arr[] of size n
function lis(arr, n)
{
	let lis = Array(n).fill(0);
	let i, j, max = 0;

	// Initialize LIS values for all indexes
	for(i = 0; i < n; i++)
		lis[i] = 1;
  console.log("Tes lis awal",lis)
	// Compute optimized LIS values in
	// bottom up manner
	for(i = 1; i < n; i++){
		for(j = 0; j < i; j++){
		  console.log("tes arr[",i,"] ",arr[i], " >  arr[",j,"] ", arr[j] 
		  ," && lis[",i,"] ",lis[i],"  < lis[",j,"] + 1 ", lis[j] + 1)
			if (arr[i] > arr[j] && lis[i] < lis[j] + 1){
				lis[i] = lis[j] + 1;
			}
			console.log("Tes lis every process ", lis)
		}		
	}			
  console.log("Tes lis final ",lis)
	// Pick maximum of all LIS values
	for(i = 0; i < n; i++)
		if (max < lis[i])
			max = lis[i];

	return max;
}

// Driver code
let arr = [50, 3, 10, 40, 40,80];
let n = arr.length;
console.log("Length of lis is " + lis(arr, n) + "\n");

// This code is contributed by avijitmondal1998

