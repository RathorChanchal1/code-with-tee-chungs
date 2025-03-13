public class MergeSort {
    public static void merge(int arr[], int l, int r, int m){
        int n1 = m - l + 1;
        int n2 = r - m;

        int L[] = new int[n1];
        int R[] = new int[n2];

        for (int i = 0; i < n1; ++i)
            L[i] = arr[l + i];
        for (int j = 0; j < n2; ++j)
            R[j] = arr[m + 1 + j];

        int i = 0, j = 0;

        int k = l;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            }
            else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }

        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }

    public static void mergeSort(int[] arr, int start, int end){
        if(start<end){
            int m = start + (end - start) / 2;
            mergeSort(arr, start, m);
            mergeSort(arr, m+1, end);
            
            merge(arr, start, end, m);
        }
    }
    public static void main(String[] args){
        int[] arr = {5,2,7,1,8,94,5,8,0};
        int start = 0;
        int end = arr.length-1;
        mergeSort(arr, start, end);
        for (int i : arr) {
            System.out.println(i);
        }
    }
}
