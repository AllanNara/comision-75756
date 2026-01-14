import express from "express";
import { users } from "./mock-users.js"

const server = express();

// server.get("/", (require, response) => {
//   response.send("El servidor express respondio!!")
// });
//
// server.get("/saludar", (req, res) => {
//   res.send("otra dirección en la url")
// })
//
// server.get("/a-color", (req, res) => {
//   let msg = "Hola a todos"
//   res.send(`<h2 style="color: blue"> ${msg} </h2>`)
// })
//
// server.get("/file", (req, res) => {
//   res.sendFile(process.cwd() + "/index.html")
// })
//
// server.get("/user", (req, res) => {
//   res.json({ username: "juliopez", name: "julio", last_name: "lopez", documents: { dni: true, analytic_certified: true }} )
// })

server.get("/users", (req, res) => {
  const { gender, age } = req.query
  let results = [ ...users ];

  if(gender) {
    results = results.filter(u => u.gender === gender)
  }
  if(age) {
    results = results.filter(u => u.age === parseInt(age))
  }

  res.json(results)
})

server.get("/users/:uid", (req, res) => {
  const uid = req.params.uid
  const user = users.find(u => u.id === parseInt(uid));

  if(!user) {
    return res.status(404).json({ message: "user not found" })
  }

  res.json(user)
})


server.listen(8080, () => {
  console.log("El servidor express esta corriendo en el puerto 8080")
})


