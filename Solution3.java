public class Solution3 {
    public int removeDuplicates(int[] nums) {
        int i=1; int j=1;
        int currNum = nums[0];
        while(i<nums.length && j<nums.length){
            if(nums[j]==currNum){
                j++;
            }else{
                nums[i] = nums[j];
                currNum = nums[j];
                i++;
                j++;
            }
        }
        return i;
    }
    
}
