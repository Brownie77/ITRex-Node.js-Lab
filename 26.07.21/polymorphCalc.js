class Calc {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    productNums() {
        return this.x * this.y
    }
    divisionNums() {
        return this.x / this.y
    }
    subtractionNums() {
        return this.x - this.y
    }
    additionNums() {
        return this.x + this.y
    }
}

class RomanCalc extends Calc {
    constructor(x, y) {
        super(x, y);
    }
    intToRomanNumber(num) {
        if (isNaN(num))
            return NaN;
        let digits = String(+num).split(""),
            key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
                "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
                "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"
            ],
            roman = "",
            i = 3;

        while (i--)
            roman = (key[+digits.pop() + (i * 10)] || "") + roman;
        return Array(+digits.join("") + 1).join("M") + roman;
    }
    productNums() {
        return this.intToRomanNumber(this.x * this.y)
    }
    divisionNums() {
        return this.intToRomanNumber(this.x / this.y)
    }
    subtractionNums() {
        return this.intToRomanNumber(this.x - this.y)
    }
    additionNums() {
        return this.intToRomanNumber(this.x + this.y)
    }

}

class MorseCalc extends Calc {
    constructor(x, y) {
        super(x, y);
    }
    intToMorseNumber(num) {
        if (isNaN(num))
            return NaN;
        let digits = String(+num).split("");
        let result = [];
        let key = ["-----", ".----", "..---", "...--", "....-", ".....", "-....", , "--...", "---..", "----.", "-----"];
        digits.forEach(item => {
            result.push(key[item])
        })
        return result;
    }
    productNums() {
        return this.intToMorseNumber(this.x * this.y)
    }
    divisionNums() {
        return this.intToMorseNumber(this.x / this.y)
    }
    subtractionNums() {
        return this.intToMorseNumber(this.x - this.y)
    }
    additionNums() {
        return this.intToMorseNumber(this.x + this.y)
    }

}

let morseCals = new MorseCalc(6, 2);

console.log(morseCals.productNums())