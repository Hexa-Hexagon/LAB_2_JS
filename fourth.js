let first = prompt("Введіть перше число:");
let second = prompt("Введіть друге число:");
let third = prompt("Введіть третє число:");

if (first > second && first > third) {
    alert("Найбільше перше число");
} else if (second > first && second > third) {
    alert("Найбільше друге число");
} else if (third > first && third > second) {
    alert("Найбільше третє число");
} else if (first == second && first == third) {
    alert("Усі числа рівні");
} else {
    alert("Неможу вирахувати");
}