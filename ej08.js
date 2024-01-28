const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
function findLongestWord(param) {
  let maslarga = param[0]
  for (i = 0; i < param.length; i++) {
    let heroe = param[i]
    if (heroe.length > maslarga.length) {
      maslarga = heroe
    }
  }
  console.log(maslarga)
}

findLongestWord(avengers)
