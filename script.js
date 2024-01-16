document.addEventListener("DOMContentLoaded", function () {
  var inputFields = document.querySelectorAll(
    'input[type="number"], input[type="text"]'
  );
  inputFields.forEach(function (field) {
    field.addEventListener("input", calculate);
  });

  calculate(); // Инициализация расчета при загрузке страницы
});

function roundUpToNearestThousand(number) {
  return Math.ceil(number / 1000) * 1000;
}
function formatNumber(number) {
  return number.toLocaleString("ru-RU");
}

function calculate() {
  var normHours = parseFloat(document.getElementById("normHours").value) || 0;
  var workedHours =
    parseFloat(document.getElementById("workedHours").value) || 0;
  var ordersCount =
    parseFloat(document.getElementById("ordersCount").value) || 0;
  var limitsCount =
    parseFloat(document.getElementById("limitsCount").value) || 0;
  var planCompletion =
    parseFloat(document.getElementById("planCompletion").value) || 0;
  var vchlScore = parseFloat(document.getElementById("vchlScore").value) || 0;
  var city = document.getElementById("myInput").value;
  var position = document.getElementById("position").value;
  var simCards = parseFloat(document.getElementById("simCards").value) || 0;

  var region = calculateRegion(city);
  var grade = calculateGrade(city);
  var salaryRate = getSalaryByGrade(grade, position);
  var salaryCost = 0; // Инициализация переменной для дополнительных расчетов
  var totalSalary = 0;
  if (workedHours > normHours) {
    salaryCost = roundUpToNearestThousand(
      (salaryRate / normHours) * (workedHours - normHours) * 2
    );
  }

  if (workedHours > normHours) {
    // Если количество отработанных часов больше нормы
    totalSalary = salaryRate;
  } else if (workedHours < normHours) {
    // Если количество отработанных часов меньше нормы
    totalSalary = Math.round((workedHours * salaryRate) / normHours);
  } else {
    // Если количество отработанных часов равно норме
    totalSalary = salaryRate;
  }

  // Простой пример расчета
  var result = roundUpToNearestThousand(totalSalary);
  var result2 = formatNumber(salaryCost);
  // Вывод результатов
  var resultsText =
    "Грейд: " +
    grade +
    "<br> Оклад: " +
    result +
    "<br> Переработки: " +
    result2;
  updateResults(resultsText);
}

function calculateGrade(city) {
  // Первый грейд
  if (
    city === "Ташкент" ||
    city === "Зангиата" ||
    city === "Келес" ||
    city === "Эшангузар" ||
    city === "Куксарай" ||
    city === "Назарбек"
  ) {
    return "1 грейд";
  }
  // Второй грейд
  else if (
    city === "Фергана" ||
    city === "Андижан" ||
    city === "Наманган" ||
    city === "Бухара" ||
    city === "Самарканд" ||
    city === "Янгиюль" ||
    city === "Чирчик" ||
    city === "Алмалык" ||
    city === "Нукус" ||
    city === "Кибрай" ||
    city === "Ахангаран" ||
    city === "Зарафшан" ||
    city === "Нурафшан" ||
    city === "Туракурган" ||
    city === "Янгибазар"
  ) {
    return "2 грейд";
  }
  // Третий грейд
  else if (
    city === "Шахрихан" ||
    city === "Коканд" ||
    city === "Маргилан" ||
    city === "Навои" ||
    city === "Джизак" ||
    city === "Карши" ||
    city === "Шахрисабз" ||
    city === "Ангрен" ||
    city === "Чуст" ||
    city === "Асака" ||
    city === "Термез" ||
    city === "Ходжейли" ||
    city === "Хива" ||
    city === "Ургенч" ||
    city === "Газалкент" ||
    city === "Риштан" ||
    city === "Бекабад" ||
    city === "Учкудук"
  ) {
    return "3 грейд";
  } else if (
    city === "Гулистан" ||
    city === "Каган" ||
    city === "Кувасай" ||
    city === "Каттакурган" ||
    city === "Каракуль" ||
    city === "Галаасия" ||
    city === "Каракитай" ||
    city === "Фуркат" ||
    city === "Бешарык" ||
    city === "Яйпан" ||
    city === "Ибрат" ||
    city === "Кургантепа" ||
    city === "Карасу" ||
    city === "Чиназ" ||
    city === "Касан" ||
    city === "Гузар" ||
    city === "Шафиркан" ||
    city === "Ходжаабад" ||
    city === "Дангара" ||
    city === "Аккурган" ||
    city === "Джалакудук" ||
    city === "Караулбазар" ||
    city === "Чартак" ||
    city === "Алмазар" ||
    city === "Жондор" ||
    city === "Гиждуван" ||
    city === "Ханабад" ||
    city === "Денау" ||
    city === "Пскент" ||
    city === "Кунград" ||
    city === "Байсун" ||
    city === "Мубарек" ||
    city === "Китаб" ||
    city === "Учкурган"
  ) {
    return "4 грейд";
  } else {
    return "Выберите город";
  }
}

function calculateRegion(city) {
  // Первый грейд
  if (
    city === "Коканд" ||
    city === "Фергана" ||
    city === "Маргилан" ||
    city === "Андижан" ||
    city === "Наманган" ||
    city === "Чуст" ||
    city === "Асака" ||
    city === "Кувасай" ||
    city === "Риштан" ||
    city === "Туракурган" ||
    city === "Шахрихан" ||
    city === "Фуркат" ||
    city === "Бешарык" ||
    city === "Яйпан" ||
    city === "Кургантепа" ||
    city === "Джалакудук" ||
    city === "Ибрат" ||
    city === "Карасу" ||
    city === "Ходжаабад" ||
    city === "Дангара" ||
    city === "Чартак" ||
    city === "Ханабад" ||
    city === "Учкурган"
  ) {
    return "Долина";
  }
  // Второй грейд
  else if (
    city === "Ташкент" ||
    city === "Янгиюль" ||
    city === "Чирчик" ||
    city === "Ангрен" ||
    city === "Алмалык" ||
    city === "Кибрай" ||
    city === "Газалкент" ||
    city === "Келес" ||
    city === "Ахангаран" ||
    city === "Нурафшан" ||
    city === "Зангиата" ||
    city === "Алмазар" ||
    city === "Каракитай" ||
    city === "Куксарай" ||
    city === "Эшангузар" ||
    city === "Бекабад" ||
    city === "Назарбек" ||
    city === "Аккурган" ||
    city === "Янгибазар" ||
    city === "Пскент"
  ) {
    return "Ташкент + ТО";
  }
  // Третий грейд
  else if (
    city === "Бухара" ||
    city === "Самарканд" ||
    city === "Навои" ||
    city === "Джизак" ||
    city === "Карши" ||
    city === "Шахрисабз" ||
    city === "Гулистан" ||
    city === "Термез" ||
    city === "Нукус" ||
    city === "Ходжейли" ||
    city === "Хива" ||
    city === "Ургенч" ||
    city === "Каган" ||
    city === "Зарафшан" ||
    city === "Каттакурган" ||
    city === "Учкудук" ||
    city === "Галаасия" ||
    city === "Каракуль" ||
    city === "Караулбазар" ||
    city === "Касан" ||
    city === "Гузар" ||
    city === "Шафиркан" ||
    city === "Гиждуван" ||
    city === "Жондор" ||
    city === "Денау" ||
    city === "Кунград" ||
    city === "Байсун" ||
    city === "Мубарек" ||
    city === "Китаб"
  ) {
    return "Юго-запад";
  } else {
    return "Выберите город";
  }
}

function getSalaryByGrade(grade, position) {
  position = position.toLowerCase().trim();
  if (position === "администратор" && grade === "1 грейд") {
    return 3000000;
  } else if (position === "администратор" && grade === "2 грейд") {
    return 2500000;
  } else if (position === "администратор" && grade === "3 грейд") {
    return 2000000;
  } else if (position === "администратор" && grade === "4 грейд") {
    return 1500000;
  } else if (
    position === "специалист по финансовым услугам" &&
    grade === "1 грейд"
  ) {
    return 3000000;
  } else if (
    position === "специалист по финансовым услугам" &&
    grade === "2 грейд"
  ) {
    return 2500000;
  } else if (
    position === "специалист по финансовым услугам" &&
    grade === "3 грейд"
  ) {
    return 2000000;
  } else if (
    position === "специалист по финансовым услугам" &&
    grade === "4 грейд"
  ) {
    return 1500000;
  } else if (position === "менеджер пункта выдачи" && grade === "1 грейд") {
    return 4000000;
  } else if (position === "менеджер пункта выдачи" && grade === "2 грейд") {
    return 3500000;
  } else if (position === "менеджер пункта выдачи" && grade === "3 грейд") {
    return 3000000;
  } else if (position === "менеджер пункта выдачи" && grade === "4 грейд") {
    return 2500000;
  } else {
    return 0; // Возвращаем 0, если комбинация грейда и должности не найдена
  }
}

function updateResults(text) {
  document.getElementById("results").innerHTML = text;
}
