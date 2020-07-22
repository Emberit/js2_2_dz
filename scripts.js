/* 1. Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=,
++, --. Количество строк кода при этом не должно измениться. Код для переделки:
var num = 1;
num = num + 12;
num = num - 14;
num = num * 5;
num = num / 7;
num = num + 1;
num = num - 1;
num = num + 7;
num = num - 18;
num = num * 10;
num = num / 15;
console.log(num); */



//Задание №1
let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num += 1;
num -= 1;
num += 7;
num -= 18;
num *= 10;
num /= 15;

/* Создайте три числовые переменные: час, минута, секунда. С их помощью выведите
время в формате час:минута:секунда'. */

console.log('Задание №2');

let chas = prompt('Введите час', '12');
let min = prompt('Введите минуты', '24');
let sec = prompt('Введите секунды', '26');

console.log( chas + ':' + min + ':' + sec + '\'')

let date = new Date();
console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '\'');

/* Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым
символом этой строки является буква 'a'. Если это так - выведите 'да', в противном
случае выведите 'нет'. */

console.log('Задание №3');

let str = 'abcde';

if (str[0] == 'a') {
    console.log('да');  
} else {
    console.log('нет');
}

/* Создайте переменную str и присвойте ей значение «В некиим царстве, в некиим
государстве жил-был богатый купец, именитый человек». Выведите на экран только
фразу «богатый купец». */

console.log('Задание №4');

str = 'В некиим царстве, в некиим государстве жил-был богатый купец, именитый человек';

console.log(str[47] + str[48] + str[49] + str[50] + str[51] + str[52] + str[53] + str[54] + str[55] + str[56] + str[57] + str[58] + str[59]);

/* Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый
символ строки, второй и третий. */

console.log('Задание №5');

str = '851';

let strsum = +str[0] + +str[1] + +str[2];
console.log(strsum);

/* Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'. */

console.log('Задание №6');

let a = 10;

if (a == 10) {
    console.log('Верно');
} else {
    console.log('Не верно');
}

/* Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'.
Проверьте работу скрипта при a, равном 'test', 'тест', 3. */

console.log('Задание №7');

a = 'test_no';

if (a == 'test') {
    console.log('Верно');
} else {
    console.log('Не верно');
}

/* Если переменная a равна или меньше 1, а переменная b больше или равна 3, то
выведите сумму этих переменных, иначе выведите их разность (результат вычитания).
Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5. */

console.log('Задание №8');

let b = 3;
a = 1;

if (a <= 1 && b >= 3) {
    console.log(a + b);
} else {
    console.log(a - b);
}

b = 6;
a = 0;

if (a <= 1 && b >= 3) {
    console.log(a + b);
} else {
    console.log(a - b);
}

b = 5;
a = 3;

if (a <= 1 && b >= 3) {
    console.log(a + b);
} else {
    console.log(a - b);
}

/* Создайте переменную name, login и pass. С помощью ф-ции prompt() получите
соответствующие значения: «Ваше имя», «Введите логин», «Ваш пароль». Выведите на
экран «Добро пожаловать, %Имя%! Вы успешно вошли на сайт.», если логин и пароль
равны 'admin' и 'nimda', иначе «%Имя%, вы неверно ввели логин или пароль!». */

document.write(`Задание №9 <br/>`);


let name = prompt('Ваше имя', 'Александр'),
    login = prompt('Введите логин', 'admin'),
    pass = prompt('Ваш пароль', 'nimba');

if (login == 'admin' && pass == 'nimba') {
    document.write(`Добро пожаловать, name! Вы успешно вошли на сайт<br/>`);
} else {
    document.write(`name, вы неверно ввели логин или пароль! <br/>`);
}

/*Переменная month может принимать значения от 1 до 12. Если она имеет значение 1, 2
или 12, то в переменную season запишем 1, если имеет значение 3, 4 или 5 – 2 и так
далее. После определения сезона, определите пору года и запишите значение в
переменную seasonName: если 1, то 'Зима', если 2 - 'Лето' и т.д. Определение поры года
написать через switch. */

document.write(`Задание №10 <br/>`);

let month = 10,
    season;

if (month == 1 || month == 2 || month == 12) {
    document.write(`season 1 <br/>`);
    season = 1;
} else if (month == 3 || month == 4 || month == 5) {
    document.write(`season 2 <br/>`);
    season = 2;
} else if (month == 6 || month == 7 || month == 8) {
    document.write(`season 3 <br/>`);
    season = 3;
} else if (month == 9 || month == 10 || month == 11) {
    document.write(`season 4 <br/>`);
    season = 4;
} else {
    document.write(`Выбран неверный месяц <br/>`);
}

switch (season) {
    case 1:
        document.write(`Зима <br/>`);
    break;
    case 2:    
        document.write(`Весна <br/>`);
    break;
    case 3:
        document.write(`Лето <br/>`);
    break;
    case 4:
        document.write(`Осень <br/>`);
    break;
    default:
        document.write(`Выбран неверный сезон <br/>`);
}