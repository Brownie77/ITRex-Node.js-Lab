function someCulc(start) {
    let count = start; // приравниваем к аргументу функции, чтобы иметь возможность создавать производные функции с любым значением.
    let inc = 2; // тут мы выводим еще одну переменную, так как нам надо замкнуть несколько значений - счетчик и наш инкримент
    return function (){
        if(count===0){ // Делаем проверку на 0, так как все кратно нулю и будет возвращаться 0.
            return count+=inc;
        }
        if(count % 5 === 0) {
            inc = 3;
            return count/=5
        } else if(count % 7 === 0){
            inc = 1;
            return count-=7;
        } 
        return count=count+inc;
    }
}


const culc = someCulc(0);
console.log(culc());
console.log(culc());
console.log(culc());
console.log(culc());
console.log(culc());
console.log(culc());

