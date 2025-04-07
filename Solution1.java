public class Solution1 {
    public void moveZeroes(int[] arr) {
        int i=0; int j=0;
        while(i<arr.length && j<arr.length){
            if(arr[i]==0 && arr[j]!=0){
                arr[i] = arr[j];
                arr[j] = 0;
                i++;
            }
            if(arr[i]!=0){
                i++;
            }
            j++;
        }
    }
}
