// 1
let output = "";
for (let i = 10; i <= 20; i++) {
  output += i;
  if (i < 20) {
    output += ", ";
  }
}
console.log(output);

// 2
for (let i = 10; i <= 20; i++) {
  const square = i * i;
  console.log(square);
}

// 3
for (let i = 1; i <= 10; i++) {
  const product = 7 * i;
  console.log(`7 * ${i} = ${product}`);
}

// 4
let sum = 0;
for (let i = 1; i <= 15; i++) {
  sum += i;
}
console.log(sum);

// 5
let product = 1;
for (let i = 15; i <= 35; i++) {
  product *= i;
}
console.log(product);

// 6
letsum = 0;
const count = 500;
for (let i = 1; i <= count; i++) {
  sum += i;
}
const average = sum / count;
console.log(average);

// 7
letsum = 0;

for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log("Сума парних чисел: " + sum);

// 8

for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

const number = 72;

console.log("Дільники числа " + number + ":");

for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    console.log(i);
  }
}

for (let i = 1; i <= 10; i++) {
  console.log("Таблиця множення для числа " + i + ":");
  for (let j = 1; j <= 10; j++) {
    console.log(i + " * " + j + " = " + i * j);
  }
  console.log("\n");
}
