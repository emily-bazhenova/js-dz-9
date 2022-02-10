//dz9

//1

const arr = ["Капуста", "Репа", "Редиска", "Морковка"];
console.log(arr.join("").toLowerCase());

//2

const arr = ["Капуста", "Репа", "Редиска", "Морковка"];
console.log(arr.join(", "));

// 3.Есть два массива ['привет'] и ['меня зовут']. Получить имя пользователя
// через prompt. В итоге вывести строку виде 'Привет меня зовут: имя_пользователя'

const arr1 = ["Привет"];
const arr2 = ["меня зовут"];
const name = prompt("Введите имя");
const newArr = arr1.concat(arr2, name);

const greating = newArr.join(" ");
console.log(greating);
