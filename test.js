// const arr = [];

// const arr_copy = [...arr];

// arr_copy.push(1);
// arr_copy.push(2);

// console.log(arr);
// console.log(arr_copy);

const task = {
  id: "lYP1Id31Bq2PpzPn0YAP6",
  title: "asdfasdf",
  description: "asdfasdf",
  status: "in-progress",
  priority: "high",
  createdAt: 1778669738722,
  updatedAt: 1778669738722,
};

const change = {
  title: "Record Redux Module",
};

Object.assign(task, change, { updatedAt: 1111111111111 });

console.log(task);
