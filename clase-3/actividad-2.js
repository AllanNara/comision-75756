const moment = require("moment");

const currentDate = moment()
const myBirthday = moment("19990211")

if(!myBirthday.isValid()) console.error("Fecha de cumpleaños no valida")

const diffDate = currentDate.diff(myBirthday, "days")

console.log("Tu nacimiento ocurrio hace " + diffDate + " dias")
