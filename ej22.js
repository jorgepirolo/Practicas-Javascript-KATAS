const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']
const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]

for (i = 0; i < foodSchedule.length; i++) {
  food = foodSchedule[i]
  if (food.isVegan == false) {
    foodSchedule.splice(i, 1, fruits[i])
    i--
  }
}
console.log(foodSchedule)
