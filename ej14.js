const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]
function repeatCounter(param) {
  let conteo = {}
  for (i = 0; i < param.length; i++) {
    if (conteo[param[i]] >= 1) {
      conteo[param[i]]++
    } else {
      conteo[param[i]] = 1
    }
  }
  console.log(conteo)
}

repeatCounter(counterWords)
