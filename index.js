// Task 1

// 1. Отримати введення
const checkSumInput = prompt('Enter the check summ:');
const tipPercentInput = prompt('Enter tip percentage:');

// 2. Перевірити на відміну (перевіряємо ЩО ВВЕЛИ, не перетворене)
if (checkSumInput === null || tipPercentInput === null) {
  alert('Canceled.');
} else {
  // 3. Перетворити на числа
  const checkSum = Number(checkSumInput);
  const tipPercentage = Number(tipPercentInput);

  // 4. Тепер перевіряємо числа
  if (
    isNaN(checkSum) ||
    isNaN(tipPercentage) ||
    checkSum < 0 ||
    tipPercentage < 0 ||
    tipPercentage > 100
  ) {
    alert('Invalid input data');
  } else {
    // Розрахунок
    let tip = (checkSum * tipPercentage) / 100;
    let sum = tip + checkSum;
    alert(`Check summ:${checkSum}
Tip: ${tipPercentage}%
Tip amount: ${tip}
Total sum to pay:  ${sum}`);
  }
}

// Task 2
// 1. Отримуємо слово від користувача
let word = prompt('Enter the word:');

// 2. Перевірка на відміну (скасування)
if (word === null) {
  alert('Canceled.');
} else {
  // 3. Обрізаємо пробіли з початку і кінця
  word = word.trim();

  // 4. Валідація введених даних
  if (word === '' || word.includes(' ')) {
    alert('Invalid input data');
  } else {
    // 5. Визначаємо довжину слова
    const wordLength = word.length;

    // 6. Перевіряємо парність довжини
    if (wordLength % 2 === 0) {
      // Парна довжина - дві центральні букви
      const startIndex = wordLength / 2 - 1; // Індекс першої центральної букви
      const center = word.slice(startIndex, startIndex + 2); // Беремо дві букви

      alert(`the word length is even  (${wordLength}), — alert the two central characters.
Word: ${word}
Result: ${center}`);
    } else {
      // Непарна довжина - одна центральна буква
      const startIndex = Math.floor(wordLength / 2); // Індекс центральної букви
      const center = word.slice(startIndex, startIndex + 1); // Беремо одну букву

      alert(`word length is odd  (${wordLength})— alert the single central character.
Word: ${word}
Result: ${center}`);
    }
  }
}
