const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
]

let peque = [] // menos de 100 minutos
let media = [] // entre 100 y 200
let grande = [] // mas de 200

for (const movie of movies) {
  if (movie.durationInMinutes < 100) {
    peque.push(movie)
  }
  if (movie.durationInMinutes > 100 && movie.durationInMinutes < 200) {
    media.push(movie)
  } else {
    grande.push(movie)
  }
}

console.log(`Peliculas pequeñas:`, peque)
console.log(`Peliculas medianas:`, media)
console.log(`Peliculas grandes:`, grande)
