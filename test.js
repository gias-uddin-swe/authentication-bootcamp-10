const obj = {
  name: "hero alom",
  age: "20",
  gf: "pinki",
};

const { name, ...rest } = obj;
console.log(rest);
