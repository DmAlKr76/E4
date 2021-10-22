function f1 () {
  return Object.create(null)
};

console.log(f1)

const x = f1()
x.a = 'b'
console.log(x)