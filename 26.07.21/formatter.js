class StringFormatter {
    constructor(inputData) {
        this.inputData = inputData;
    }
    removeNonUniqueChars() {
        return Array.from(new Set(this.inputData)).join('');
    }

}

class NumberFormatter extends StringFormatter {
    constructor(inputData) {
        super(inputData);
    }
    removeNonUniqueChars() {
        let tempData = this.inputData.toString().split('').map(Number)
        return Array.from(new Set(tempData)).join('');
    }
}

class DateFormatter extends StringFormatter {
    constructor(inputData) {
        super(inputData);
        this.validDataPass = /\d{2}[-.\/]\d{2}(?:[-.\/]\d{2}(\d{2})?)?/g;
        this.validDateFormat = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
    }
    removeNonUniqueChars() {
        let tempArray = [...this.inputData.matchAll(this.validDataPass)].map(item => item[0]);
        tempArray = tempArray.map(item => item.match(this.validDateFormat)).filter(function (val) {
            if (val) return val
        }).map(item => item[0])
        return this.inputData.replace(
            this.validDataPass,
            '')
    }
}

class RegexFormatter extends StringFormatter {
    constructor(inputData, regex) {
        super(inputData);
        this.regex = regex;
    }
    removeNonUniqueChars() {
        return this.inputData.replace(
            this.regex, '')
    }
}
let stringFormatter = new StringFormatter('new new Castle Castle')
let numberFormatter = new NumberFormatter(1122334455667788)
let dateFormatter = new DateFormatter('04/12/2005 f adf 11/01/2001 sdfg 11/01/2001 asfd asf 11/01/2001')
let regexFormatter = new RegexFormatter('04/12/2005 f adf 11/01/2001 sdfg 11/01/2001 asfd asf 11/01/2001', /\d{2}[-.\/]\d{2}(?:[-.\/]\d{2}(\d{2})?)?/g);
console.log(regexFormatter.removeNonUniqueChars())
console.log(dateFormatter.removeNonUniqueChars())
console.log(numberFormatter.removeNonUniqueChars())
console.log(stringFormatter.removeNonUniqueChars())