let orderPieces = 4;

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_DENIED = 'Недостаточно средств на счету!';

let totalPrice; // Write code on this line
let balanceCredit; // Write code on this line
let message;

// Write code under this line
if (orderPieces === null) {
  message = CANCELED_BY_USER;
  console.log(message);
} else {
  orderPieces = Number(orderPieces);
  totalPrice = orderPieces * pricePerDroid;
}

if (totalPrice <= credits) {
  balanceCredit = credits - totalPrice;
  message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
  console.log(message);
} else if (totalPrice > credits) {
  message = ACCESS_DENIED;
  console.log(message);
}
