// Task 1

// 1. Отримати введення
const checkSumInput = prompt('Введіть суму чека:');
const tipPercentInput = prompt('Введіть відсоток чайових:');

// 2. Перевірити на відміну (перевіряємо ЩО ВВЕЛИ, не перетворене)
if (checkSumInput === null || tipPercentInput === null) {
  alert('Відміна');
} else {
  // 3. Перетворити на числа
  const checkSum = Number(checkSumInput);
  const tipPercentage = Number(tipPercentInput);

  // 4. Тепер перевіряємо числа
  if (isNaN(checkSum) || isNaN(tipPercentage)) {
    alert('Щось з введених даних не є числом');
  } else if (checkSum <= 0 || tipPercentage <= 0) {
    alert("Щось з введених даних є від'ємним числом або нулем");
  } else if (tipPercentage > 100) {
    alert('Відсоток чайових перевищує 100');
  } else {
    // Розрахунок
    let tip = (checkSum * tipPercentage) / 100;
    let sum = tip + checkSum;
    alert(`Сума чека: ${checkSum}
Відсоток чайових: ${tipPercentage}%
Сумма чайових: ${tip}
Загальна сума до сплати: ${sum}`);
  }
}

// Task 2
// 1. Отримуємо слово від користувача
let word = prompt('Введіть слово:');

// 2. Перевірка на відміну (скасування)
if (word === null) {
  alert('Відміна');
} else {
  // 3. Обрізаємо пробіли з початку і кінця
  word = word.trim();

  // 4. Валідація введених даних
  if (word === '') {
    alert('Ви не ввели слово');
  } else if (word.includes(' ')) {
    alert('Ваше введення містить пробіли');
  } else {
    // 5. Визначаємо довжину слова
    const wordLength = word.length;

    // 6. Перевіряємо парність довжини
    if (wordLength % 2 === 0) {
      // Парна довжина - дві центральні букви
      const startIndex = wordLength / 2 - 1; // Індекс першої центральної букви
      const center = word.slice(startIndex, startIndex + 2); // Беремо дві букви

      alert(`Так як введене слово має парну кількість літер (${wordLength}), то посередині стоять дві букви
Середні букви: ${center}`);
    } else {
      // Непарна довжина - одна центральна буква
      const startIndex = Math.floor(wordLength / 2); // Індекс центральної букви
      const center = word.slice(startIndex, startIndex + 1); // Беремо одну букву

      alert(`Так як введене слово має непарну кількість літер (${wordLength}), то посередині стоїть одна буква
Середня буква: ${center}`);
    }
  }
}
