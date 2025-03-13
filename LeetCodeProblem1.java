public class LeetCodeProblem1{
    public void merge(int[] num1, int m, int[] num2, int n) {
        for(int i=0; i<num2.length; i++){
            num1[num1.length-1-i] =num2[i];
        }
        mergesort(num1, 0, num1.length-1);
    }

    public static void mergesort(int[] nums, int l, int r){
        if(l<r){
            int mid = l+ (r-l)/2;
            mergesort(nums, l, mid);
            mergesort(nums, mid+1,r);
            merge(nums,l,r,mid);
        }
    }

    public static void merge(int[] nums, int l, int r, int mid){
        int n1 = mid-l+1;
        int n2 = r-mid;
        int[] L = new int[n1];
        int[] R = new int[n2];

        for(int i=0; i<L.length; i++){
            L[i] = nums[l + i];
        }
        for(int i=0; i<R.length; i++){
            R[i] = nums[mid + 1 + i];
        }

        int i = 0;
        int j =0;
        int k = l;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                nums[k] = L[i];
                i++;
            }
            else {
                nums[k] = R[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            nums[k] = L[i];
            i++;
            k++;
        }

        while (j < n2) {
            nums[k] = R[j];
            j++;
            k++;
        }
    }
}