evenSum = function(n, sum){
    if(!(n%2)){
        sum += n;
    }
    return sum;
}

fib = function(numMax){
    var sum = 0;
    for(i=0,j=1,k=0; k<numMax;i=j,j=x,k++){
        x=i+j;
        sum = evenSum(x, sum);
    }
    return sum;
}

console.log(fib(4000000));
