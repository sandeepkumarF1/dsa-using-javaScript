const StockSellBuy = function (prices) {
    var globalProfit = 0;
    for(var i =0; i< prices.length-1; i++){
      for(var j=i+1; j<prices.length; j++){
        var currentProfit = prices[j] - prices[i];
      if(currentProfit>globalProfit) globalProfit=currentProfit;
      }
    }
      return globalProfit;
  }
  
  const output = StockSellBuy([7,1,5,3,6,4]);
  console.log(output);
  
  
  const StockSellBuy2 = function (prices) {
    var minStock = prices[0] || 0;
    var profit = 0;
    for(let i=1; i<prices.length; i++){
      if(prices[i] < minStock){
        minStock = prices[i];
      }
      profit = Math.max(profit, prices[i] - minStock);
    }
    return profit;
  }
  
  const output2 = StockSellBuy2([7,1,5,3,6,4]);
  console.log(output2);