const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
function finderName(param, name) {
  for (i = 0; i < param.length; i++) {
    element = param[i]

    if (element === name) {
      return `${true}. La posición del elemento es ${i}`
    }
  }
  return false
}

console.log(finderName(nameFinder, 'Msdfghd'))
