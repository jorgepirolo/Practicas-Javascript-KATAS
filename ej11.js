const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']
function averageWord(param) {
  let suma = 0
  for (i = 0; i < param.length; i++) {
    if (typeof param[i] === 'string') {
      suma += param[i].length
    }
    if (typeof param[i] === 'number') {
      suma += param[i]
    }
  }
  console.log(suma)
}

averageWord(mixedElements)
