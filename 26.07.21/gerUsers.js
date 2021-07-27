const axios = require('axios');
class Users {
    constructor(amount) {
        this.amount = amount;
    }
    getUsers = async function () {
        let users = await axios({
            method: 'get',
            url: `https://randomuser.me/api/?results=${this.amount}`
        })
        users = users.data.results;
        for (let i = 0; i < users.length; i++) {
            console.log(Object.entries(users[i]).forEach(keyValuePair => {
                console.log("   ", ...keyValuePair)
            }))///<- в принципе читаемый вариант 
            console.log('---------------------------')
            // console.log(`NAME: ${users[i].name.title} ${users[i].name.first} ${users[i].name.last}\nGENDER: ${users[i].gender}\nLOCATION: ${users[i].location.country}, ${users[i].location.state}, ${users[i].location.city} \nPOSTCODE: ${users[i].location.postcode} \nCOORDINATES: ${users[i].location.coordinates.latitude},${users[i].location.coordinates.longitude} \nMAIL: ${users[i].email}`)
        } ///  <--- второй вариат перевода текста с помощью обратных кавычек, но много механической работы и нет защищенности от изменений формы данных на стороне сервера. Хотя читается лучше;)

    }
}
let users = new Users(2);
console.log(users.getUsers());