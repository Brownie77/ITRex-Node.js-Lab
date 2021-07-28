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
        this.validDateFormat = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
        this.formatedData = '';
    }
    removeNonUniqueChars() {
        let dateFormatArray = [];
        dateFormatArray = this.inputData.match(this.validDataPass);
        dateFormatArray = dateFormatArray.map(item => item.match(this.validDateFormat)).filter(function (val) {
            if (val) return val
        }).map(item => item[0])//<---- 1) проверяем формат, 2)проверяем корректность веденных данных в плане даты(12 месяцев, 31 день и тд)
        dateFormatArray = dateFormatArray.filter((item, index) => dateFormatArray.indexOf(item) === index); //<---удаляем дубли из массива дат
        dateFormatArray.forEach((date) => { 
            const tempStringArray = this.inputData.split(date);
            tempStringArray.splice(1, 0, date);
            this.formatedData = tempStringArray.join('');
        });
        return this.formatedData;
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
let dateFormatter = new DateFormatter('0/12/2005 f adf 11/01/2001 sdfg 11/01/2001 asfd asf 11/01/2001')
let regexFormatter = new RegexFormatter('04/12/2005 f adf 11/01/2001 sdfg 11/01/2001 asfd asf 11/01/2001', /\d{2}[-.\/]\d{2}(?:[-.\/]\d{2}(\d{2})?)?/g);
console.log(regexFormatter.removeNonUniqueChars())
console.log(dateFormatter.removeNonUniqueChars())
console.log(numberFormatter.removeNonUniqueChars())
console.log(stringFormatter.removeNonUniqueChars())