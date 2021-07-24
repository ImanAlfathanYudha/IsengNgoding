public class HelloWorld{

    public void sort(int arr[])
    {
        //{ 12, 11, 13, 5, 6 };
        int n = arr.length;
        for (int i = 1; i < n; ++i) {
            System.out.println("tes i "+i);
            int key = arr[i];
            int j = i - 1;
            System.out.println("Tes loop key "+key+" arr["+i+"] "+arr[i]+" j "+j);
            /* Move elements of arr[0..i-1], that are
               greater than key, to one position ahead
               of their current position */
            while (j >= 0 && arr[j] > key) {
                System.out.println("Tes while loop key "+key+" arr["+j+"] "+arr[j]);
                arr[j + 1] = arr[j];
                System.out.println("Tes while loop  arr["+j+"+ 1] "+arr[j + 1]);
                j = j - 1;
                System.out.println("Tes while loop  j "+j);
            }
            arr[j + 1] = key;
            System.out.println("tes key masuk ke arr["+j+"+ 1] "+arr[j + 1]);
        }
    }
    
    public static void printArray(int arr[])
    {
        int n = arr.length;
        for (int i = 0; i < n; ++i) {
            System.out.print(arr[i] + " ");
        }    
        System.out.println();
    }

     public static void main(String args[])
    {
        int arr[] = { 12, 11, 13, 5, 6 };
        HelloWorld ob = new HelloWorld();
        ob.sort(arr);
        System.out.println("Result ");
        printArray(arr);
    }
}