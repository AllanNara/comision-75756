import express from "express";
import hbs from "express-handlebars"

import userRoutes from "./routes/user.routes.js"
import petRouter from "./routes/pet.routes.js"
import viewsRouter from "./routes/views.routes.js"

const PORT = 8080;
const app = express();

app.engine("handlebars", hbs.engine())
app.set("views", import.meta.dirname + "/views")
app.set("view engine", "handlebars")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/static", express.static(import.meta.dirname + "/public"))

app.use("/api/users", userRoutes)
app.use("/api/pets", petRouter)
app.use("/", viewsRouter)

app.listen(PORT, () => console.log(`listen on port ${PORT}`))