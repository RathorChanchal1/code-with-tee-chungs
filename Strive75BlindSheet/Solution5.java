package Strive75BlindSheet;

public class Solution5 {
//     public int maxSubArray(int[] nums) {
//         int sum = nums[0]; int finalSum = nums[0];
//         for(int i=1; i<nums.length; i++){
//             if(nums[i]>=0){
//                 if(sum<0){
//                     sum = nums[i];
//                 }else{
//                     sum = sum+nums[i];
//                 }
//             }else{
//                 if(sum>0){
//                     sum = sum+nums[i];
//                 }else{
//                     sum = nums[i];
//                 }
//             }
//             if(finalSum<sum){
//                 finalSum = sum;
//             }
//         }
//         return finalSum;
//     }
    public int maxSubArray(int[] nums) {
        int n = nums.length;
        int max = Integer.MIN_VALUE, sum = 0;
        
        for(int i=0;i<n;i++){
            sum += nums[i];
            max = Math.max(sum,max);
            
            if(sum<0) sum = 0;
        }
        
        return max;
    }
}
