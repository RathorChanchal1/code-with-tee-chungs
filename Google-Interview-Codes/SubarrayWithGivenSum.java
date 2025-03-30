import java.util.ArrayList;

class SubarrayWithGivenSum {
    public static ArrayList<Integer> subarraySum(int[] arr, int target) {
        ArrayList<Integer> result = new ArrayList<>();
        int i=0; int j=0;
        int sum =0;
        while(i<arr.length && j<arr.length && sum!=target){
            
            while(sum>target && i<arr.length){
                sum -= arr[i];
                i++;
            }
            if(sum<target){
                sum += arr[j];
                j++;    
            }
           
        }
        if(sum==target){
            result.add(i+1);
            result.add(j);
            return result;
        }else{
            result.add(-1);
            return result;
        }
        
    }
}