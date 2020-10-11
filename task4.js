const countTotalSalary = function (employees) {
  // Write code under this line
  const salaries = Object.values(employees);
  let totalSum = 0;
  for (const salary of salaries) {
    totalSum += salary;
  }
  return totalSum;
};

// Объекты и ожидаемый результат
const developers = {
  mango: 300,
  poly: 250,
  alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
};
console.log(countTotalSalary(supports));
// 500
