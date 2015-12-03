// Find the largest fibonnaci number under a certain integer.
var fibLargest = (function(){
    var memo = {};
    return function(n) {
        if (memo[n]) {return memo[n];}
        return memo[n] = (n <= 2) ? 1 : fibLargest(n-2) + fibLargest(n-1);
    };
})();

function largestFib(n){
    return n < 2 ? n : largestFib(n - 1) + largestFib(n - 2);
}

process.argv.forEach(function (val, index, array) {
    if(index > 1){ // Skip node and file name arguments
        console.log(fibLargest(val));
    }
});
