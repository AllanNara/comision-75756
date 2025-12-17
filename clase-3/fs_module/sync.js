const fs = require("fs");

fs.writeFileSync("./ejemplo.txt", "¡Hola a todos, fui escrito desde el codigo!")

if(fs.existsSync("./ejemplo.txt")) {
  let contenido = fs.readFileSync("./ejemplo.txt", "utf-8")
  console.log(contenido)

  fs.appendFileSync("./ejemplo.txt", "\nMas contenido")

  contenido = fs.readFileSync("./ejemplo.txt", "utf-8")
  console.log(contenido)


  fs.unlinkSync("./ejemplo.txt")
} else {
  console.log("No content..")
}
