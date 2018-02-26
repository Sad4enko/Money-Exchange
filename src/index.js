// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var coins = {};
    var H = 0, Q = 0, D = 0, N = 0, P = 0;

    if (currency <= 0) {
      return coins;
    } else if (currency > 10000) {
      coins.error = "You are rich, my friend! We don't have so much coins for exchange";
      return coins;
    }
    while (true) {
      if (currency/50 >= 1) {
        currency -= 50;
        H++;
        coins.H = H;
        continue;
      } else if (currency/25 >= 1) {
        currency -= 25;
        Q++;
        coins.Q = Q;
        continue;
      } else if (currency/10 >= 1) {
        currency -= 10;
        D++;
        coins.D = D;
        continue;
      } else if (currency/5 >= 1) {
        currency -= 5;
        N++;
        coins.N = N;
        continue;
      } else if (currency > 0) {
        currency -= 1;
        P++;
        coins.P = P;
        continue;
      } else {
        break;
      }
    }
    return coins;
}
