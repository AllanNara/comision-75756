const http = require("http");

const server = http.createServer((require, response) => {
  response.end("El servidor respondio!!")
})

server.listen(3000, () => {
  console.log("El servidor esta corriendo en el puerto 3000")
})
