
function crasher(a) {
    delete a.bla;
  }
  
  const a = {
    bla: 'bla',
  };
  Object.freeze(a)// предотвращаем удаление или добавление новых свойств к объекту. 
  //Функция не приносит изменений, но и не вызывает ошибку( если мы не в строгом режиме)
  crasher(a);
  
console.log(a)