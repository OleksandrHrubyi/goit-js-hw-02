let input;
let total = 0;

while (input !== null) {
  input = prompt('введіть число');
  let allNumber = Number(input);
  console.log(allNumber);

  if (isNaN(allNumber)) {
    alert(' не число');
  } else {
    total += Number(allNumber);
  }

  console.log(total);
}

alert(`сума чисел ${total}`);
