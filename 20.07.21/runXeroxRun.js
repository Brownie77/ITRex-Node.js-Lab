function copy(n, x, y) {
    let minTime = 1;
    let maxTime = (n-1)* Math.min(x,y);
    console.log(maxTime)
    while(maxTime- minTime>1){
        let middle = (maxTime+minTime)/2;
        if(middle/y+middle/x>=n-1){
            maxTime = middle;
        } else {
            minTime = middle;
        }
    }
    return Math.floor(maxTime + Math.min(x,y))
}


console.log(copy(4, 1, 1))