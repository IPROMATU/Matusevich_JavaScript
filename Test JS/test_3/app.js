let array = prompt('Введите числовой массив через пробел :'), arrayResult = [];
array = array.trim().split(/\s+/);

for (let i = 0; i < array.length; i++) {
  if (array[i] % 3 == 0 && array[i] != 0) arrayResult.push(array[i]);
}

alert('Ваш массив :\n' + array + '\n \n' + 'Элементы массива кратные 3 :\n' + arrayResult);