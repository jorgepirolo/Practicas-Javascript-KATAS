const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(param) {
  let suma = 0
  for (i = 0; i < param.length; i++) {
    suma = suma + param[i]
  }
  let avg = suma / param.length

  console.log(avg)
}

average(numbers)
