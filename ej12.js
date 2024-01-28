const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
function removeDuplicates(param) {
  for (i = 0; i < param.length; i++) {
    let comida = param[i]

    for (j = i + 1; j < param.length; j++) {
      let compa = param[j]

      if (comida === compa) {
        param.splice(j, 1)
      }
    }
  }
  console.log(param)
}

removeDuplicates(duplicates)
