function copy(n, x, y) {
    let minTime = 1;
    let maxTime = (n-1)* Math.min(x,y);
    while(maxTime- minTime>1){
        let middle = (maxTime+minTime)/2;
        console.log(Math.floor(middle/y)+Math.floor(middle/x))
        if(Math.floor(middle/y)+Math.floor(middle/x)>=n-1){
            maxTime = Math.floor(middle);
        } else {
            minTime = Math.floor(middle);
        }
        console.log(maxTime)

    }
    return (maxTime + Math.min(x,y))
}


console.log(copy(5, 1, 2))