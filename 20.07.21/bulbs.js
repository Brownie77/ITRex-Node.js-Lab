//Создаем массив c length = num; 
// массив заполнен 0 (не горит)
// инвертируем каждую 2, 3, 8 по очереди, если был 0 - 1, если 1 - 0, считаем единицы. ВСЕ. 
// 
function bulbs(num, invNum) {
    const bulbs = Array(num).fill(0)
    for (let i = 0; i < invNum.length; i++) { //<-------- каждый элемент который надо инвертировать 
        let j = bulbs.length;
        for (let j = 0; j < bulbs.length + 1; j++) {
            console.log(`j = ${j} bulbs[j] = ${bulbs[j]}`);
            if (j % invNum[i] == 0 && bulbs[j - 1] != undefined) {
                bulbs[j - 1] === 1 ? bulbs[j - 1] = 0 : bulbs[j - 1] = 1;
            }

        }
    }
    return bulbs.filter(bulb => bulb == 1).length;
}
console.log(bulbs(20, [2, 3, 8]))
console.log(bulbs(172, [19, 2, 7, 13, 40, 23, 16, 1, 45, 9]))