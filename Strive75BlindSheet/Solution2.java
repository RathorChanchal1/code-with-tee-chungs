package Strive75BlindSheet;

public class Solution2 {
    public int maxProfit(int[] prices) {
        int buy=prices[0]; int profit =0;
        for(int i=1; i<prices.length; i++){
            if(buy>prices[i]){
                buy=prices[i];
            }
            profit = Math.max(prices[i]-buy,profit);
        }
        return profit;
    }
}
