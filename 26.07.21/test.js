class StringDateFormatte {
    constructor(string){
        this.string = string;
    }
    removeNonUniqueChars() {
      let dates = [];
      dates = this.string.match(/(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])[\/\-\.]\d{4}/g);
      console.log(dates)
      dates = dates.filter((item, index) => dates.indexOf(item) === index);
      console.log(dates)
      dates.forEach((item) => {
        const tempStringArray = this.string.split(item);
        console.log(tempStringArray)
        tempStringArray.splice(1, 0, item);
        this.string = tempStringArray.join('');
      });
      return this.string;
    }
  }


  let stringDate = new StringDateFormatte('3.1.2005 f adf 11/12/2001 sdfg 11/01/2001 asfd asf 11/01/2001')
  console.log(stringDate.removeNonUniqueChars())

  let arrarr = [1,2,3,3,4,4,5,6,7,7,7,8,8]
  arrarr.filter((item, index) => console.log(item, arrarr.indexOf(item), index));
  arrarr = arrarr.filter((item, index) => arrarr.indexOf(item)===index);
arrarr