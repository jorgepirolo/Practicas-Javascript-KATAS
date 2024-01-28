const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
]
let menores = []
let mayores = []
for (i = 0; i < users.length; i++) {
  if (users[i].years < 18) {
    menores.push(users[i].name)
  }
  if (users[i].years >= 18) {
    mayores.push(users[i].name)
  }
}
console.log(`Usuarios menores de edad:`, menores)
console.log(`Usuarios mayores de edad:`, mayores)
