const number1 = Number(prompt('Введите первое число'));
const number2 = Number(prompt('Введите второе число'));
const operator = prompt('Введите оператор.');

let result;
switch (operator) {
    case '+':
        result = number1 + number2;
        break;
    case '-':
        result = number1 - number2;
        break;
    case '*':
        result = number1 * number2;
        break;
    case '/':

        if (number2 === 0) {
            result = ('На ноль делить нельзя, чмо!')
        } else {
            result = number1 / number2;

        }
        break;
    default:
        result = ('Че ты пишешь, черт');
        break;
}

alert(result);