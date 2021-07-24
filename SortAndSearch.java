// Java implementation of iterative Binary Search 
public class BinarySearch { 
	// Returns index of x if it is present in arr[], 
	// else return -1 
	int binarySearch(int arr[], int x) 
	{ 
	    System.out.println("Tes binarySearch "+x+" arr "+arr);
		int l = 0, r = arr.length - 1; 
		while (l <= r) { 
		    System.out.println("tes l "+l+" r "+r);
			int m = l + (r - l) / 2; 
            System.out.println("tes m "+m);
			// Check if x is present at mid 
			if (arr[m] == x) {
			System.out.println("tes arr[m] "+arr[m]+" sama kek x "+x);
				return m; 
			}
			// If x greater, ignore left half 
			if (arr[m] < x) {
			System.out.println("tes arr[m] "+arr[m]+" lebih kecil dari x "+x);
				l = m + 1; 
				System.out.println("tes l sekarang jadi "+l);

			// If x is smaller, ignore right half 
			} else {
				r = m - 1; 
				System.out.println("tes arr[m] "+arr[m]+" lebih gede dari x "+x+" r sekarang jadi "+r);
			}	
		} 

		// if we reach here, then element was 
		// not present 
		return -1; 
	}
	static boolean checkarrayIfSortedOrNot(int arr[], int n) {
	    System.out.println("tes checkarrayIfSortedOrNot");
	    if (n==0 || n==1) {
	        return true;
	    }
	    for (int i =0; i< n-1;i++ ){
	        if (arr[i]>arr[i+1]) {
	            System.out.println("tes arr[i] "+arr[i]+" arr[i+1] "+arr[i+1]);
	            return false;
	        }
	    }
	    return true;
	}
	public void insertionSort(int arr[]){
	    //{ 2, 3, 4,30, 10, 28, 40 }
	    System.out.println("tes insertionSort");
	    for (int i=1;i<arr.length;i++){
	        int key = arr[i];
	        int j = i-1;
	        System.out.println("tes loop pertama key "+key+" j "+j+" arr[j] "+arr[j]);
	        while (j>=0 && arr[j]>key){
	            System.out.println("tes while loop kedua key "+key+" j "+j+" arr[j] "+arr[j]);
	            arr[j+1] = key;
	            j=j-1;
	            System.out.println("tes dituker key "+key+" j "+j+" arr[j] "+arr[j]);
	        }
	        arr[j+1] = key;
	        System.out.println("tes final arr[j+1]=key "+arr[j+1]);
	    }
	}
	public void checkBinarySearchResult(int arr[], int x){
	     System.out.println("tes checkBinarySearchResult");
	     int result = binarySearch(arr, x); 
    		if (result == -1) 
    			System.out.println("Element not present"); 
    		else
    			System.out.println("Element found at "
    							+ "index " + result);
	}
	// Driver method to test above 
	public static void main(String args[]) 
	{ 
		BinarySearch ob = new BinarySearch(); 
		int arr[] = { 2, 3, 4,30, 10, 28, 40 }; 
		int n = arr.length; 
		int x = 11; 
		boolean isSorted = checkarrayIfSortedOrNot(arr, n);
		System.out.println("TES isSorted "+isSorted);
		
		if (isSorted){
		  //  int result = ob.binarySearch(arr, x); 
    // 		if (result == -1) 
    // 			System.out.println("Element not present"); 
    // 		else
    // 			System.out.println("Element found at "
    // 							+ "index " + result);
           ob.checkBinarySearchResult(arr, x); 
		} else {
		    ob.insertionSort(arr);
		   isSorted = ob.checkarrayIfSortedOrNot(arr, n);
		   System.out.println("TES isSorted "+isSorted);
		   ob.checkBinarySearchResult(arr, x); 
		}						
	} 
} 
