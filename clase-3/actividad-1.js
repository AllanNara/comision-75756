const randomNum = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}


const calcularNumero = (iterations, max, min) => {
  return new Promise((resolve, reject) => {
    if(!iterations || !max || !min) reject({ error: "faltan argumentos" })
    if(min > max) reject({ error: "maximo debe ser mayor al minimo"})
    setTimeout(() => {
      const obj = {};
      for (let i = 0; i < iterations; i++) {
        const num = randomNum(max, min);
        if(obj[num]) obj[num]++
        else obj[num] = 1
      }
      resolve(obj)
    }, 1)
  })
}


calcularNumero(10000, 30) 
  .then(data => console.log(data))
  .catch(err => console.log(err))
