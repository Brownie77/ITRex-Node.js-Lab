function findKayakAmount(group, maxWeight) {
    let boats = 0;
    
    arrWeight = group.sort((a, b) => a - b);
    let i = 0;
    let j = arrWeight.length-1;
    while (i <= j) {
        if (arrWeight[i] + arrWeight[j] <= maxWeight) {
            i++;
        } 
        
		j--;
        
       boats++;
    }
    
    return boats;
};


boats = findKayakAmount([50, 120, 74, 60, 100, 82], 135);
console.log(boats)


