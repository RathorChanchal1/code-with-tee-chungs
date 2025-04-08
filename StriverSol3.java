public class StriverSol3 {
    public void nextPermutation(int[] nums) {
        int n = nums.length;
        int i = n - 1;

        // Find the first decreasing element from the end
        while (i > 0 && nums[i - 1] >= nums[i]) {
            i--;
        }

        // If we found a decreasing element
        if (i > 0) {
            int j = n - 1;

            // Find the element just larger than nums[i - 1]
            while (nums[j] <= nums[i - 1]) {
                j--;
            }

            // Swap the found elements
            swap(nums, i - 1, j);
        }

        // Reverse the order of elements from i to the end of the array
        reverse(nums, i, n - 1);
    }

    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    private void reverse(int[] nums, int start, int end) {
        while (start < end) {
            swap(nums, start, end);
            start++;
            end--;
        }
    }
}
