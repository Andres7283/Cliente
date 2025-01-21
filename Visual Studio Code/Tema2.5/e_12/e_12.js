let salarios = {
  John: 100,
  Ann: 160,
  Peter: 130,
};
var suma = 0;

for (let prop in salarios) {
  suma += salarios[prop];
}
console.log(`La suma de los salarios es ${suma}€.`);
